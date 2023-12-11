import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { Event } from '../../../core/models/event.model';
import { CreateExpenseRequest, Expense } from '../../../core/models/expense.model';
import { User } from '../../../core/models/user.model';
import { IEventRepo } from '../../../core/repository/interfaces/event.interface';
import { IExpenseRepo } from '../../../core/repository/interfaces/expense.interface';
import { IUserRepo } from '../../../core/repository/interfaces/user.interface';

@Component({
  selector: 'app-create-edit-expense',
  templateUrl: './create-edit-expense.component.html',
  styleUrls: ['./create-edit-expense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditExpenseComponent implements OnInit
{
  form: FormGroup = new FormGroup({});
  get expenses()
  {
    return this.form?.controls["expenses"] as FormArray<FormGroup>;
  }

  payers(index: number)
  {
    return this.expenses.at(index).controls["payers"] as FormArray<FormGroup>;
  }

  consumers(index: number)
  {
    return this.expenses.at(index).controls["consumers"] as FormArray<FormGroup>;
  }
  users$!: Observable<User[]>;
  model!: Event;
  eventId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IExpenseRepo') private expenseRepo: IExpenseRepo,
    @Inject('IEventRepo') private eventRepo: IEventRepo,
    @Inject('IUserRepo') private userRepo: IUserRepo
  )
  {
    this.eventId = this.route.parent?.snapshot.paramMap.get('eventId')!;
    this.users$ = this.userRepo.getAll();
  }

  async ngOnInit(): Promise<void>
  {

    this.model = await firstValueFrom(this.eventRepo.getById(this.eventId));

    this.load();

  }

  load(): void
  {
    this.form = new FormGroup({
      expenses: new FormArray([])
    });

    this.model?.expenses.forEach((expense, expenseIndex) =>
    {
      const expenseForm = new FormGroup({
        name: new FormControl(expense.name),
        payers: new FormArray([]),
        consumers: new FormArray([]),
        price: new FormControl(expense.price)
      });

      this.expenses.push(expenseForm);

      expense?.payers.forEach(payer =>
      {
        const payerForm = new FormGroup({
          userId: new FormControl(payer.userId),
          price: new FormControl(payer.price)
        });

        (this.expenses.at(expenseIndex).controls["payers"] as FormArray).push(payerForm);
      });

      expense?.consumers.forEach(consumer =>
      {
        const consumerForm = new FormGroup({
          userId: new FormControl(consumer.userId),
          share: new FormControl(consumer.share),
          price: new FormControl(consumer.price)
        });

        (this.expenses.at(expenseIndex).controls["consumers"] as FormArray).push(consumerForm);
      });
    });
  }

  addExpense(): void
  {
    const expenseForm = new FormGroup({
      name: new FormControl(''),
      payers: new FormArray([]),
      consumers: new FormArray([]),
      price: new FormControl(0)
    });

    this.expenses.push(expenseForm);
  }

  deleteExpense(expenseIndex: number): void
  {
    this.expenses.removeAt(expenseIndex);
  }

  deletePayer(expenseIndex: number, payerIndex: number): void
  {
    (this.expenses.at(expenseIndex).controls["payers"] as FormArray).removeAt(payerIndex);
  }

  addPayer(expenseIndex: number): void
  {
    const payerForm = new FormGroup({
      userId: new FormControl(),
      price: new FormControl(0)
    });

    (this.expenses.at(expenseIndex).controls["payers"] as FormArray).push(payerForm);
  }

  deleteConsumer(expenseIndex: number, consumerIndex: number): void
  {
    (this.expenses.at(expenseIndex).controls["consumers"] as FormArray).removeAt(consumerIndex);
  }

  addConsumer(expenseIndex: number): void
  {
    const consumerForm = new FormGroup({
      userId: new FormControl(),
      share: new FormControl(0),
      price: new FormControl(0)
    });

    (this.expenses.at(expenseIndex).controls["consumers"] as FormArray).push(consumerForm);
  }

  equalShare(consumers: FormArray<FormGroup>, expenseForm: FormGroup): void
  {
    let totalPrice = 0;

    (expenseForm.controls["payers"] as FormArray<FormGroup>).controls.forEach((payerForm: FormGroup) =>
    {
      totalPrice += payerForm.value.price;
    });

    const eachConsumerShare = 1 / consumers.length;
    const eachConsumerPrice = totalPrice / consumers.length;

    consumers.controls.forEach((consumerForm: FormGroup) =>
    {
      consumerForm.patchValue({
        share: eachConsumerShare,
        price: eachConsumerPrice,
      });
    });
  }

  async save(): Promise<void>
  {
    this.form.value.expenses.forEach(async (exp: Expense) =>
    {

      const request: CreateExpenseRequest = {
        ...exp,
        ...{ eventId: +this.eventId }
      };

      await firstValueFrom(this.expenseRepo.create(request));
    });

    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
