import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { CreateEventRequest, CreateEventResponse, Event, EventStatusEnum } from "../../../models/event.model";
import { IEventRepo } from "../../interfaces/event.interface";

@Injectable()
export class EventV1LocalStorageRepo implements IEventRepo
{
  localStorageKey = 'event';

  getAll(): Observable<Event[]>
  {
    const events: Event[] = this.get();
    return of(events);
  }

  getById(id: string): Observable<Event>
  {
    const events: Event[] = this.get();
    const event = events.find(u => u.id === id)!;
    return of(event);
  }

  create(model: CreateEventRequest): Observable<CreateEventResponse>
  {
    const newEvent: Event = {
      id: new Date().getTime().toString(),
      name: model.name,
      status: EventStatusEnum.New,
      expenses: model.expenses
    };

    const events: Event[] = this.get();
    events.push(newEvent);

    this.set(events);

    return of(newEvent);
  }

  edit(model: Event): Observable<boolean>
  {
    const events: Event[] = this.get();
    const eventIndex = events.findIndex(u => u.id === model.id)!;

    events[eventIndex] = model;

    this.set(events);

    return of(true);
  }

  delete(id: string): Observable<boolean>
  {
    const events: Event[] = this.get();
    const newEvents = events.filter(u => u.id !== id)!;

    this.set(newEvents);

    return of(true);
  }

  private set(model: Event[]): void
  {
    localStorage.setItem(this.localStorageKey, JSON.stringify(model));
  }

  private get(): Event[]
  {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }
}
