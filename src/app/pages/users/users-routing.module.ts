import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create/create-user.component';
import { EditUserComponent } from './edit/edit-user.component';
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
        component: CreateUserComponent,
      },
      {
        path: 'edit/:id',
        component: EditUserComponent,
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
