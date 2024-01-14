import { BaseModel } from "./base.model";

export class Consumer extends BaseModel
{
  memberId!: string;
  share!: number;
  price!: number;
}
