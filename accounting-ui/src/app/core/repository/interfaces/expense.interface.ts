import { Observable } from 'rxjs';
import { CreateExpenseRequest, CreateExpenseResponse, Expense } from "../../models/expense.model";

export interface IExpenseRepo
{
  getAll(): Observable<Expense[]>;
  getById(id: string): Observable<Expense>;
  create(model: CreateExpenseRequest): Observable<CreateExpenseResponse>;
  edit(model: Expense): Observable<boolean>;
  delete(id: string): Observable<boolean>;
}
