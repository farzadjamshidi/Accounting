import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'member',
    loadChildren: () => import('./pages/members/members.module').then(m => m.MembersModule)
  },
  {
    path: 'group/:groupId/event/:eventId/expense',
    loadChildren: () => import('./pages/expenses/expenses.module').then(m => m.ExpensesModule)
  },
  {
    path: 'group/:groupId/event',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./pages/groups/groups.module').then(m => m.GroupsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
