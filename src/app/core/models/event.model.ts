import { BaseModel } from "./base.model";
import { User } from "./user.model";

export class Event extends BaseModel
{
  name!: string;
  status!: EventStatusEnum;
}

export enum EventStatusEnum
{
  New,
  Completed
}

export class CreateEventRequest
{
  name!: string;
  users!: User[];
}

export class CreateEventResponse extends Event
{
}
