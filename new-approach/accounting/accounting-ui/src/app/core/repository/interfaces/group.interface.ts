import { Observable } from 'rxjs';
import { CreateGroupRequest, CreateGroupResponse, Group } from "../../models/group.model";

export interface IGroupRepo
{
  getAll(): Observable<Group[]>;
  getById(id: string): Observable<Group>;
  create(model: CreateGroupRequest): Observable<CreateGroupResponse>;
  edit(model: Group): Observable<boolean>;
  delete(id: string): Observable<boolean>;
}
