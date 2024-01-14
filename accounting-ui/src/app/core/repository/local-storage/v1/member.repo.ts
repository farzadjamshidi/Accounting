import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CreateMemberRequest, CreateMemberResponse, Member } from "../../../models/member.model";
import { IMemberRepo } from "../../interfaces/member.interface";

@Injectable()
export class MemberV1LocalStorageRepo implements IMemberRepo
{
  localStorageKey = 'member';

  getAll(): Observable<Member[]>
  {
    const members: Member[] = this.get();
    return of(members);
  }

  getById(id: string): Observable<Member>
  {
    const members: Member[] = this.get();
    const member = members.find(u => u.id === id)!;
    return of(member);
  }

  create(model: CreateMemberRequest): Observable<CreateMemberResponse>
  {
    const newMember: Member = {
      id: new Date().getTime().toString(),
      name: model.name
    };

    const members: Member[] = this.get();
    members.push(newMember);

    this.set(members);

    return of(newMember);
  }

  edit(model: Member): Observable<boolean>
  {
    const members: Member[] = this.get();
    const memberIndex = members.findIndex(u => u.id === model.id)!;

    members[memberIndex] = model;

    this.set(members);

    return of(true);
  }

  delete(id: string): Observable<boolean>
  {
    const members: Member[] = this.get();
    const newMembers = members.filter(u => u.id !== id)!;

    this.set(newMembers);

    return of(true);
  }

  private set(model: Member[]): void
  {
    localStorage.setItem(this.localStorageKey, JSON.stringify(model));
  }

  private get(): Member[]
  {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }
}
