import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { Expense } from "./expense.model";
import { Member } from "./member.model";

@Entity()
export class Consumer extends BaseModel
{
  @ManyToOne(() => Member, member => member.consumers)
  member: Member;

  @Column()
  memberId: number;

  @Column("double precision")
  share: number;

  @Column("double precision")
  price: number;

  @ManyToOne(() => Expense, expense => expense.consumers, {
    onDelete: "CASCADE"
  })
  expense: Expense;

  @Column()
  expenseId: number;
}
