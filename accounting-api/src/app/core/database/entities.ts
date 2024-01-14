import { Consumer } from "../../models/consumer.model";
import { EventStatus } from "../../models/event-status.model";
import { Event } from "../../models/event.model";
import { Expense } from "../../models/expense.model";
import { Group } from "../../models/group.model";
import { Member } from "../../models/member.model";
import { Payer } from "../../models/payer.model";

export const entities = [
  Consumer,
  Payer,
  Expense,
  EventStatus,
  Event,
  Group,
  Member
];

export default entities;
