import { Observable } from 'rxjs';
import { CreateExpenseResponse, CreateMultipleExpenseRequest, Expense } from "../../models/expense.model";

export interface IExpenseRepo
{
  getAll(): Observable<Expense[]>;
  getById(id: string): Observable<Expense>;
  create(model: CreateMultipleExpenseRequest): Observable<CreateExpenseResponse>;
  edit(model: Expense): Observable<boolean>;
  delete(id: string): Observable<boolean>;
}
