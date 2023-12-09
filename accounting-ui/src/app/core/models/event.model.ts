import { BaseModel } from "./base.model";
import { Expense } from "./expense.model";

export class Event extends BaseModel
{
  groupId!: string;
  name!: string;
  statusId!: EventStatusEnum;
  expenses!: Expense[];
}

export enum EventStatusEnum
{
  New = 1,
  Completed = 2
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
