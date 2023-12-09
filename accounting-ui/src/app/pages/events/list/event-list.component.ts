import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../core/models/event.model';
import { IEventRepo } from '../../../core/repository/interfaces/event.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent
{
  list$ = this.eventRepo.getAllByGroupId((this.route.snapshot.parent)!.paramMap.get('groupId')!);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IEventRepo') private eventRepo: IEventRepo
  )
  {
  }

  clickEvent(event: Event): void
  {
    this.router.navigate(['../' + event.id], { relativeTo: this.route });
  }
}
