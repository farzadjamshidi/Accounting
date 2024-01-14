import { Observable } from 'rxjs';
import { CreateMemberRequest, CreateMemberResponse, Member } from "../../models/member.model";

export interface IMemberRepo
{
  getAll(): Observable<Member[]>;
  getById(id: string): Observable<Member>;
  create(model: CreateMemberRequest): Observable<CreateMemberResponse>;
  edit(model: Member): Observable<boolean>;
  delete(id: string): Observable<boolean>;
}
