import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CreateEventRequest, CreateEventResponse, Event } from "../../../models/event.model";
import { IEventRepo } from "../../interfaces/event.interface";

@Injectable()
export class EventV1BaseServerRepo implements IEventRepo
{

  private readonly repoUrl = 'http://localhost:3000/api/events';

  constructor(
    private http: HttpClient
  )
  {
  }

  getAll(): Observable<Event[]>
  {
    const apiUrl = this.repoUrl;
    return this.http.get<Event[]>(apiUrl);
  }

  getAllByGroupId(groupId: string): Observable<Event[]>
  {
    const apiUrl = this.repoUrl;
    return this.http.get<Event[]>(apiUrl, { params: { groupId: groupId } });
  }

  getById(id: string): Observable<Event>
  {
    const apiUrl = this.repoUrl + "/" + id;
    return this.http.get<Event>(apiUrl);
  }

  create(model: CreateEventRequest): Observable<CreateEventResponse>
  {
    const apiUrl = this.repoUrl;
    return this.http.post<CreateEventResponse>(apiUrl, model);
  }

  edit(model: Event): Observable<boolean>
  {
    const apiUrl = this.repoUrl + "/" + model.id;
    return this.http.put<boolean>(apiUrl, model);
  }

  patch(model: Partial<Event>): Observable<boolean>
  {
    // const events: Event[] = this.get();
    // const eventIndex = events.findIndex(u => u.id === model.id)!;

    // events[eventIndex].groupId = model.groupId ?? events[eventIndex].groupId;
    // events[eventIndex].name = model.name ?? events[eventIndex].name;
    // events[eventIndex].status = model.status ?? events[eventIndex].status;
    // events[eventIndex].expenses = model.expenses ?? events[eventIndex].expenses;

    // this.set(events);

    return of(true);
  }

  delete(id: string): Observable<boolean>
  {
    const apiUrl = this.repoUrl + "/" + id;
    return this.http.delete<boolean>(apiUrl);
  }
}
