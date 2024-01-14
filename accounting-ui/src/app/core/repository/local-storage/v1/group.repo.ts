import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CreateGroupRequest, CreateGroupResponse, Group } from "../../../models/group.model";
import { IGroupRepo } from "../../interfaces/group.interface";

@Injectable()
export class GroupV1LocalStorageRepo implements IGroupRepo
{
  localStorageKey = 'group';

  getAll(): Observable<Group[]>
  {
    const groups: Group[] = this.get();
    return of(groups);
  }

  getById(id: string): Observable<Group>
  {
    const groups: Group[] = this.get();
    const group = groups.find(u => u.id === id)!;
    return of(group);
  }

  create(model: CreateGroupRequest): Observable<CreateGroupResponse>
  {
    const newGroup: Group = {
      id: new Date().getTime().toString(),
      members: model.members,
      name: model.name
    };

    const groups: Group[] = this.get();
    groups.push(newGroup);

    this.set(groups);

    return of(newGroup);
  }

  edit(model: Group): Observable<boolean>
  {
    const groups: Group[] = this.get();
    const groupIndex = groups.findIndex(u => u.id === model.id)!;

    groups[groupIndex] = model;

    this.set(groups);

    return of(true);
  }

  delete(id: string): Observable<boolean>
  {
    const groups: Group[] = this.get();
    const newGroups = groups.filter(u => u.id !== id)!;

    this.set(newGroups);

    return of(true);
  }

  private set(model: Group[]): void
  {
    localStorage.setItem(this.localStorageKey, JSON.stringify(model));
  }

  private get(): Group[]
  {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }
}
