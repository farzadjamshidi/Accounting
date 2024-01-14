import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoutPageComponent } from './logout.component';

const BASE_MODULES = [
  CommonModule
];

const COMPONENTS = [
  LogoutPageComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: LogoutPageComponent }]),
    ...BASE_MODULES
  ]
})
export class LogoutModule { }
