import { BaseModel } from "./base.model";

export class Payer extends BaseModel
{
  userId!: string;
  price!: number;
}
