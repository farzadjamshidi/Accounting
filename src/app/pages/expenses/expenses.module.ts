import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventV1LocalStorageRepo } from '../../core/repository/local-storage/v1/event.repo';
import { UserV1LocalStorageRepo } from '../../core/repository/local-storage/v1/user.repo';
import { CreateEditExpenseComponent } from './create-edit/create-edit-expense.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';


@NgModule({
  declarations: [
    ExpensesComponent,
    CreateEditExpenseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ExpensesRoutingModule
  ],
  providers: [
    { provide: 'IEventRepo', useClass: EventV1LocalStorageRepo },
    { provide: 'IUserRepo', useClass: UserV1LocalStorageRepo }
  ]
})
export class ExpensesModule { }
