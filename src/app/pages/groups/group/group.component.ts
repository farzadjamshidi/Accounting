import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { CalculationHelper } from '../../../core/helpers/calculation.helper';
import { Group } from '../../../core/models/group.model';
import { IEventRepo } from '../../../core/repository/interfaces/event.interface';
import { IGroupRepo } from '../../../core/repository/interfaces/group.interface';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupComponent
{
  model$: Observable<Group>;
  calculations!: { name: string; accounting: number; }[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private calculationHelper: CalculationHelper,
    @Inject('IEventRepo') private eventRepo: IEventRepo,
    @Inject('IGroupRepo') private groupRepo: IGroupRepo
  )
  {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.model$ = this.groupRepo.getById(id);
  }

  async deleteGroup(group: Group): Promise<void>
  {
    await firstValueFrom(this.groupRepo.delete(group.id));
    this.router.navigate(['group/list']);
  }

  async onCalculate(group: Group): Promise<void>
  {
    const events = await firstValueFrom(this.eventRepo.getAllByGroupId(group.id));

    const calculationsById = this.calculationHelper.events(events);

    const calculations: { name: string; accounting: number; }[] = [];

    Object.keys(calculationsById).forEach((id: string) =>
    {
      calculations.push({
        name: group.members.find(member => member.id === id)!.name,
        accounting: calculationsById[id]
      });
    });

    this.calculations = calculations;

  }
}
