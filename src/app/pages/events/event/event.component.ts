import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Event, EventStatusEnum } from '../../../core/models/event.model';
import { User } from '../../../core/models/user.model';
import { IEventRepo } from '../../../core/repository/interfaces/event.interface';
import { IUserRepo } from '../../../core/repository/interfaces/user.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent implements OnInit
{
  calculations!: { name: string; accounting: number; }[];
  model!: Event;
  users!: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IEventRepo') private eventRepo: IEventRepo,
    @Inject('IUserRepo') private userRepo: IUserRepo
  )
  {
  }

  async ngOnInit(): Promise<void>
  {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.model = await firstValueFrom(this.eventRepo.getById(id));

    this.users = await firstValueFrom(this.userRepo.getAll());
  }

  async deleteEvent(): Promise<void>
  {
    await firstValueFrom(this.eventRepo.delete(this.model.id));
    this.router.navigate(['../list'], { relativeTo: this.route });
  }

  onCalculate(): void
  {
    const calculationsById = this.calculate(this.model);

    const calculations: { name: string; accounting: number; }[] = [];

    Object.keys(calculationsById).forEach((id: string) =>
    {
      calculations.push({
        name: this.users.find(user => user.id === id)!.name,
        accounting: calculationsById[id]
      });
    });

    this.calculations = calculations;
  }

  calculate(event: Event): { [key: string]: number; }
  {
    if (event.status === EventStatusEnum.Completed) return {};

    const result: { [key: string]: number; } = {};

    event.expenses.forEach(expense =>
    {
      expense.payers.forEach(payer =>
      {
        result[payer.userId] = (result[payer.userId] ? result[payer.userId] : 0) + payer.price;
      });
      expense.consumers.forEach(consumer =>
      {
        result[consumer.userId] = (result[consumer.userId] ? result[consumer.userId] : 0) - consumer.price;
      });
    });

    return result;
  }
}
