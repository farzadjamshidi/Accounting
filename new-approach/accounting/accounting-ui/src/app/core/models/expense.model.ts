import { BaseModel } from "./base.model";
import { Consumer } from "./consumer.model";

export class Expense extends BaseModel
{
  name!: string;
  payers!: Payer[];
  consumers!: Consumer[];
  price!: number;
}

export class Payer
{
  userId!: string;
  price!: number;
}

export class CreateExpenseRequest
{
  name!: string;
  payers!: Payer[];
  consumers!: Consumer[];
  price!: number;
}

export class CreateExpenseResponse extends Expense
{
}
