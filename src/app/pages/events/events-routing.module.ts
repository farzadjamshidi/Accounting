import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditEventComponent } from './create-edit/create-edit-event.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events.component';
import { EventListComponent } from './list/event-list.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: 'list',
        component: EventListComponent,
      },
      {
        path: 'create',
        component: CreateEditEventComponent,
      },
      {
        path: ':id/edit',
        component: CreateEditEventComponent,
      },
      {
        path: ':id',
        component: EventComponent,
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
