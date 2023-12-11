import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { Expense } from "./expense.model";
import { User } from "./user.model";

@Entity()
export class Payer extends BaseModel
{
  @ManyToOne(() => User, user => user.payers)
  user: User;

  @Column()
  userId: number;

  @Column()
  price: number;

  @ManyToOne(() => Expense, expense => expense.payers)
  expense: Expense;
}
