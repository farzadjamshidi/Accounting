import { BaseModel } from "./base.model";

export class Consumer extends BaseModel
{
  userId!: string;
  share!: number;
  price!: number;
}
