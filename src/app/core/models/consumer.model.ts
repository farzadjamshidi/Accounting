import { BaseModel } from "./base.model";
import { User } from "./user.model";

export class Consumer extends BaseModel
{
  user!: User;
  share!: number;
  price!: number;
}
