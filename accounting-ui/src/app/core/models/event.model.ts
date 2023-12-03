import { BaseModel } from "./base.model";
import { Expense } from "./expense.model";

export class Event extends BaseModel
{
  groupId!: string;
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
  groupId!: string;
  name!: string;
  expenses!: Expense[];
}

export class CreateEventResponse extends Event
{
}
