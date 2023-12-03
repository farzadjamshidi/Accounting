import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditExpenseComponent } from './create-edit/create-edit-expense.component';
import { ExpensesComponent } from './expenses.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent,
    children: [
      {
        path: 'create-edit',
        component: CreateEditExpenseComponent,
      },
      {
        path: '**',
        redirectTo: 'create-edit'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
