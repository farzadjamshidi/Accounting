import { Consumer } from "../../models/consumer.model";
import { EventStatus } from "../../models/event-status.model";
import { Event } from "../../models/event.model";
import { Expense } from "../../models/expense.model";
import { Group } from "../../models/group.model";
import { Payer } from "../../models/payer.model";
import { User } from "../../models/user.model";

export const entities = [
  Consumer,
  Payer,
  Expense,
  EventStatus,
  Event,
  Group,
  User
];

export default entities;
