import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EventV1LocalStorageRepo } from '../../core/repository/local-storage/v1/event.repo';
import { MemberV1LocalStorageRepo } from '../../core/repository/local-storage/v1/member.repo';
import { CreateEditExpenseComponent } from './create-edit/create-edit-expense.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    ExpensesComponent,
    CreateEditExpenseComponent
  ],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ExpensesRoutingModule
  ],
  providers: [
    { provide: 'IEventRepo', useClass: EventV1LocalStorageRepo },
    { provide: 'IMemberRepo', useClass: MemberV1LocalStorageRepo }
  ]
})
export class ExpensesModule { }
