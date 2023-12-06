import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CreateGroupRequest, CreateGroupResponse, Group } from "../../../models/group.model";
import { IGroupRepo } from "../../interfaces/group.interface";

@Injectable()
export class GroupV1BaseServerRepo implements IGroupRepo
{
  private readonly repoUrl = 'http://localhost:3000/api/groups';

  constructor(
    private http: HttpClient
  )
  {
  }

  getAll(): Observable<Group[]>
  {
    const apiUrl = this.repoUrl;
    return this.http.get<Group[]>(apiUrl);
  }

  getById(id: string): Observable<Group>
  {
    const apiUrl = this.repoUrl + "/" + id;
    return this.http.get<Group>(apiUrl);
  }

  create(model: CreateGroupRequest): Observable<CreateGroupResponse>
  {
    const apiUrl = this.repoUrl;
    return this.http.post<CreateGroupResponse>(apiUrl, model);
  }

  edit(model: Group): Observable<boolean>
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
