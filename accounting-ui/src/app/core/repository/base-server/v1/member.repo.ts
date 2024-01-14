import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CreateMemberRequest, CreateMemberResponse, Member } from "../../../models/member.model";
import { IMemberRepo } from "../../interfaces/member.interface";

@Injectable()
export class MemberV1BaseServerRepo implements IMemberRepo
{
  private readonly repoUrl = 'http://localhost:3000/api/members';

  constructor(
    private http: HttpClient
  )
  {
  }

  getAll(): Observable<Member[]>
  {
    const apiUrl = this.repoUrl;
    return this.http.get<Member[]>(apiUrl);
  }

  getById(id: string): Observable<Member>
  {
    const apiUrl = this.repoUrl + "/" + id;
    return this.http.get<Member>(apiUrl);
  }

  create(model: CreateMemberRequest): Observable<CreateMemberResponse>
  {
    const apiUrl = this.repoUrl;
    return this.http.post<CreateMemberResponse>(apiUrl, model);
  }

  edit(model: Member): Observable<boolean>
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
