import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateUserComponent } from './create/create-user.component';
import { EditUserComponent } from './edit/edit-user.component';
import { UserListComponent } from './list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    CreateUserComponent,
    EditUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
