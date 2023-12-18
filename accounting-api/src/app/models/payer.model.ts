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

  @Column("double precision")
  price: number;

  @ManyToOne(() => Expense, expense => expense.payers, {
    onDelete: "CASCADE"
  })
  expense: Expense;

  @Column()
  expenseId: number;
}
