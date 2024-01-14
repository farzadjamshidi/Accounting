import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthV1BaseServerRepo } from '../../../core/repository/base-server/v1/auth.repo';
import { LoginPageComponent } from './login.component';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

const COMPONENTS = [
  LoginPageComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
    ...BASE_MODULES,
    ...MATERIAL
  ],
  providers: [
    { provide: 'IAuthRepo', useClass: AuthV1BaseServerRepo }
  ],
})
export class LoginModule { }
