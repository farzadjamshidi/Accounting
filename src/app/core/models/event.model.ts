import { BaseModel } from "./base.model";
import { Expense } from "./expense.model";

export class Event extends BaseModel
{
  name!: string;
  status!: EventStatusEnum;
  expenses!: Expense[];
}

export enum EventStatusEnum
{
  New,
  Completed
}

export class CreateEventRequest
{
  name!: string;
  expenses!: Expense[];
}

export class CreateEventResponse extends Event
{
}
