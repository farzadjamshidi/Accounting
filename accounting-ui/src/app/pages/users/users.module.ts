import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserV1BaseServerRepo } from '../../core/repository/base-server/v1/user.repo';
import { CreateEditUserComponent } from './create-edit/create-edit-user.component';
import { UserListComponent } from './list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    CreateEditUserComponent,
    UserComponent
  ],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  providers: [
    { provide: 'IUserRepo', useClass: UserV1BaseServerRepo }
  ]
})
export class UsersModule { }
