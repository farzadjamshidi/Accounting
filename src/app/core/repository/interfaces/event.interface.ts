import { Observable } from 'rxjs';
import { CreateEventRequest, CreateEventResponse, Event } from "../../models/event.model";

export interface IEventRepo
{
  getAll(): Observable<Event[]>;
  getById(id: string): Observable<Event>;
  create(model: CreateEventRequest): Observable<CreateEventResponse>;
  edit(model: Event): Observable<boolean>;
  delete(id: string): Observable<boolean>;
}
