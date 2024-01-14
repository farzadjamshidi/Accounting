import { BaseModel } from "./base.model";

export class Member extends BaseModel
{
  name!: string;
}

export class CreateMemberRequest
{
  name!: string;
}

export class CreateMemberResponse extends Member
{
}
