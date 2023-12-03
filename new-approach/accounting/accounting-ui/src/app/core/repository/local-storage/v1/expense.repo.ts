import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CreateExpenseRequest, CreateExpenseResponse, Expense } from "../../../models/expense.model";
import { IExpenseRepo } from "../../interfaces/expense.interface";

@Injectable()
export class ExpenseV1LocalStorageRepo implements IExpenseRepo
{
  localStorageKey = 'expense';

  getAll(): Observable<Expense[]>
  {
    const expenses: Expense[] = this.get();
    return of(expenses);
  }

  getById(id: string): Observable<Expense>
  {
    const expenses: Expense[] = this.get();
    const expense = expenses.find(u => u.id === id)!;
    return of(expense);
  }

  create(model: CreateExpenseRequest): Observable<CreateExpenseResponse>
  {
    const newExpense: Expense = {
      id: new Date().getTime().toString(),
      name: model.name,
      consumers: model.consumers,
      payers: model.payers,
      price: model.price
    };

    const expenses: Expense[] = this.get();
    expenses.push(newExpense);

    this.set(expenses);

    return of(newExpense);
  }

  edit(model: Expense): Observable<boolean>
  {
    const expenses: Expense[] = this.get();
    const expenseIndex = expenses.findIndex(u => u.id === model.id)!;

    expenses[expenseIndex] = model;

    this.set(expenses);

    return of(true);
  }

  delete(id: string): Observable<boolean>
  {
    const expenses: Expense[] = this.get();
    const newExpenses = expenses.filter(u => u.id !== id)!;

    this.set(newExpenses);

    return of(true);
  }

  private set(model: Expense[]): void
  {
    localStorage.setItem(this.localStorageKey, JSON.stringify(model));
  }

  private get(): Expense[]
  {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }
}
