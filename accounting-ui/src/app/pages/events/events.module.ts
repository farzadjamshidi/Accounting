import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserV1BaseServerRepo } from '../../core/repository/base-server/v1/user.repo';
import { EventV1LocalStorageRepo } from '../../core/repository/local-storage/v1/event.repo';
import { CreateEditEventComponent } from './create-edit/create-edit-event.component';
import { EventComponent } from './event/event.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListComponent } from './list/event-list.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    CreateEditEventComponent,
    EventComponent
  ],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    EventsRoutingModule
  ],
  providers: [
    { provide: 'IEventRepo', useClass: EventV1LocalStorageRepo },
    { provide: 'IUserRepo', useClass: UserV1BaseServerRepo }
  ]
})
export class EventsModule { }
