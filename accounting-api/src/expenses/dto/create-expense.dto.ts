import { Consumer } from "../../app/models/consumer.model";
import { Payer } from "../../app/models/payer.model";

export class CreateExpenseDto
{
  name: string;
  payers: Payer[];
  consumers: Consumer[];
  price: number;
  eventId: number;
}
export class CreateExpensesDto
{
  expenses: CreateExpenseDto[];
}
