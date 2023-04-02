import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserV1LocalStorageRepo } from '../../core/repository/local-storage/v1/user.repo';
import { CreateUserComponent } from './create/create-user.component';
import { EditUserComponent } from './edit/edit-user.component';
import { UserListComponent } from './list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';


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
  ],
  providers: [
    { provide: 'IUserRepo', useClass: UserV1LocalStorageRepo }
  ]
})
export class UsersModule { }
