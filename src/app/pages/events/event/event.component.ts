import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { Event } from '../../../core/models/event.model';
import { IEventRepo } from '../../../core/repository/interfaces/event.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent
{
  model$: Observable<Event>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IEventRepo') private eventRepo: IEventRepo
  )
  {
    const id = this.route.snapshot.paramMap.get('id')!;

    const groupId = this.route.parent?.snapshot.paramMap.get('groupId')!;

    this.model$ = this.eventRepo.getById(id);
  }

  async deleteEvent(event: Event): Promise<void>
  {
    await firstValueFrom(this.eventRepo.delete(event.id));
    this.router.navigate(['../list'], { relativeTo: this.route });
  }
}
