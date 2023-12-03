import { BaseModel } from "./base.model";

export class User extends BaseModel
{
  name!: string;
}

export class CreateUserRequest
{
  name!: string;
}

export class CreateUserResponse extends User
{
}
