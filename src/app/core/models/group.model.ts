import { BaseModel } from "./base.model";
import { User } from "./user.model";

export class Group extends BaseModel
{
  name!: string;
  users!: User[];
}

export class CreateGroupRequest
{
  name!: string;
  users!: User[];
}

export class CreateGroupResponse extends Group
{
}
