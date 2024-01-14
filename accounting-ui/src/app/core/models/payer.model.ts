import { BaseModel } from "./base.model";

export class Payer extends BaseModel
{
  memberId!: string;
  price!: number;
}
