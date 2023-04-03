import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventV1LocalStorageRepo } from '../../core/repository/local-storage/v1/event.repo';
import { UserV1LocalStorageRepo } from '../../core/repository/local-storage/v1/user.repo';
import { CreateEditEventComponent } from './create-edit/create-edit-event.component';
import { EventComponent } from './event/event.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListComponent } from './list/event-list.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    CreateEditEventComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    EventsRoutingModule
  ],
  providers: [
    { provide: 'IEventRepo', useClass: EventV1LocalStorageRepo },
    { provide: 'IUserRepo', useClass: UserV1LocalStorageRepo }
  ]
})
export class EventsModule { }
