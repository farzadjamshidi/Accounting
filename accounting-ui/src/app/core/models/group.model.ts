import { BaseModel } from "./base.model";
import { Member } from "./member.model";

export class Group extends BaseModel
{
  name!: string;
  members!: Member[];
}

export class CreateGroupRequest
{
  name!: string;
  members!: Member[];
}

export class CreateGroupResponse extends Group
{
}
