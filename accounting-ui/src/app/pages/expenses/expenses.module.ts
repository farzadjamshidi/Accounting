import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EventV1BaseServerRepo } from '../../core/repository/base-server/v1/event.repo';
import { ExpenseV1BaseServerRepo } from '../../core/repository/base-server/v1/expense.repo';
import { UserV1BaseServerRepo } from '../../core/repository/base-server/v1/user.repo';
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
    { provide: 'IExpenseRepo', useClass: ExpenseV1BaseServerRepo },
    { provide: 'IEventRepo', useClass: EventV1BaseServerRepo },
    { provide: 'IUserRepo', useClass: UserV1BaseServerRepo }
  ]
})
export class ExpensesModule { }
