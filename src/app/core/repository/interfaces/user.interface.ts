import { Observable } from 'rxjs';
import { CreateUserRequest, CreateUserResponse, User } from "../../models/user.model";

export interface IUserRepo
{
  getAll(): Observable<User[]>;
  getById(id: string): Observable<User>;
  create(model: CreateUserRequest): Observable<CreateUserResponse>;
  edit(model: User): Observable<void>;
  delete(id: string): Observable<void>;
}
