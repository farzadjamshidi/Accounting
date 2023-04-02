import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CreateUserRequest, CreateUserResponse, User } from "../../../models/user.model";
import { IUserRepo } from "../../interfaces/user.interface";

@Injectable()
export class UserV1LocalStorageRepo implements IUserRepo
{
  localStorageKey = 'user';

  getAll(): Observable<User[]>
  {
    const users: User[] = this.get();
    return of(users);
  }

  getById(id: string): Observable<User>
  {
    const users: User[] = this.get();
    const user = users.find(u => u.id === id)!;
    return of(user);
  }

  create(model: CreateUserRequest): Observable<CreateUserResponse>
  {
    const newUser: User = {
      id: new Date().getTime().toString(),
      name: model.name
    };

    const users: User[] = this.get();
    users.push(newUser);

    this.set(users);

    return of(newUser);
  }

  edit(model: User): Observable<boolean>
  {
    const users: User[] = this.get();
    const userIndex = users.findIndex(u => u.id === model.id)!;

    users[userIndex] = model;

    this.set(users);

    return of(true);
  }

  delete(id: string): Observable<boolean>
  {
    const users: User[] = this.get();
    const newUsers = users.filter(u => u.id !== id)!;

    this.set(newUsers);

    return of(true);
  }

  private set(model: User[]): void
  {
    localStorage.setItem(this.localStorageKey, JSON.stringify(model));
  }

  private get(): User[]
  {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }
}
