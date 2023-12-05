import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CreateUserRequest, CreateUserResponse, User } from "../../../models/user.model";
import { IUserRepo } from "../../interfaces/user.interface";

@Injectable()
export class UserV1BaseServerRepo implements IUserRepo
{
  private readonly repoUrl = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
  )
  {
  }

  getAll(): Observable<User[]>
  {
    const apiUrl = this.repoUrl;
    return this.http.get<User[]>(apiUrl);
  }

  getById(id: string): Observable<User>
  {
    const apiUrl = this.repoUrl + "/" + id;
    return this.http.get<User>(apiUrl);
  }

  create(model: CreateUserRequest): Observable<CreateUserResponse>
  {
    const apiUrl = this.repoUrl;
    return this.http.post<CreateUserResponse>(apiUrl, model);
  }

  edit(model: User): Observable<boolean>
  {
    const apiUrl = this.repoUrl + "/" + model.id;
    return this.http.put<boolean>(apiUrl, model);
  }

  delete(id: string): Observable<boolean>
  {
    const apiUrl = this.repoUrl + "/" + id;
    return this.http.delete<boolean>(apiUrl);
  }
}
