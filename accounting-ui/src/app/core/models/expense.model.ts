import { BaseModel } from "./base.model";
import { Consumer } from "./consumer.model";
import { Payer } from "./payer.model";

export class Expense extends BaseModel
{
  name!: string;
  payers!: Payer[];
  consumers!: Consumer[];
  price!: number;
  eventId!: number;
}

export class CreateExpenseRequest
{
  name!: string;
  payers!: Payer[];
  consumers!: Consumer[];
  price!: number;
  eventId!: number;
}

export class CreateMultipleExpenseRequest
{
  expenses!: CreateExpenseRequest[];
}

export class CreateExpenseResponse extends Expense
{
}
