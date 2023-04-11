import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
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
