import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditUserComponent } from './create-edit/create-edit-user.component';
import { UserListComponent } from './list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent,
      },
      {
        path: 'create',
        component: CreateEditUserComponent,
      },
      {
        path: ':id/edit',
        component: CreateEditUserComponent,
      },
      {
        path: ':id',
        component: UserComponent,
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
export class UsersRoutingModule { }
