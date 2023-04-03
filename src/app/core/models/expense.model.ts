import { BaseModel } from "./base.model";
import { Consumer } from "./consumer.model";
import { User } from "./user.model";

export class Expense extends BaseModel
{
  name!: string;
  payers!: Payer[];
  consumers!: Consumer[];
  price!: number;
}

export class Payer
{
  user!: User;
  price!: number;
}

export class CreateExpenseRequest
{
  name!: string;
  payers!: User[];
  consumers!: Consumer[];
  price!: number;
}

export class CreateExpenseResponse extends Expense
{
}
