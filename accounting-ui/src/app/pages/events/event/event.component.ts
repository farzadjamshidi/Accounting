import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CalculationHelper } from '../../../core/helpers/calculation.helper';
import { Event } from '../../../core/models/event.model';
import { Member } from '../../../core/models/member.model';
import { IEventRepo } from '../../../core/repository/interfaces/event.interface';
import { IMemberRepo } from '../../../core/repository/interfaces/member.interface';

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
  members!: Member[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private calculationHelper: CalculationHelper,
    @Inject('IEventRepo') private eventRepo: IEventRepo,
    @Inject('IMemberRepo') private memberRepo: IMemberRepo
  )
  {
  }

  async ngOnInit(): Promise<void>
  {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.model = await firstValueFrom(this.eventRepo.getById(id));

    this.members = await firstValueFrom(this.memberRepo.getAll());
  }

  async deleteEvent(): Promise<void>
  {
    await firstValueFrom(this.eventRepo.delete(this.model.id));
    this.router.navigate(['../list'], { relativeTo: this.route });
  }

  onCalculate(): void
  {
    const calculationsById = this.calculationHelper.event(this.model);

    const calculations: { name: string; accounting: number; }[] = [];

    Object.keys(calculationsById).forEach((id: string) =>
    {
      calculations.push({
        name: this.members.find(member => member.id == id)!.name, // TODO: we need to change id to number to be the same as DB
        accounting: calculationsById[id]
      });
    });

    this.calculations = calculations;
  }
}
