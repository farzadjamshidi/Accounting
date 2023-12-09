import { EventStatus } from "../../models/event-status.model";
import { Event } from "../../models/event.model";
import { Group } from "../../models/group.model";
import { User } from "../../models/user.model";

export const entities = [
  EventStatus,
  Event,
  Group,
  User
];

export default entities;
