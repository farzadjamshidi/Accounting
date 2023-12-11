import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { Expense } from "./expense.model";
import { User } from "./user.model";

@Entity()
export class Consumer extends BaseModel
{
  @ManyToOne(() => User, user => user.consumers)
  user: User;

  @Column()
  userId: number;

  @Column()
  share: number;

  @Column()
  price: number;

  @ManyToOne(() => Expense, expense => expense.consumers)
  expense: Expense;
}
