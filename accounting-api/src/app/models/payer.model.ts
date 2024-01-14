import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { Expense } from "./expense.model";
import { Member } from "./member.model";

@Entity()
export class Payer extends BaseModel
{
  @ManyToOne(() => Member, member => member.payers)
  member: Member;

  @Column()
  memberId: number;

  @Column("double precision")
  price: number;

  @ManyToOne(() => Expense, expense => expense.payers, {
    onDelete: "CASCADE"
  })
  expense: Expense;

  @Column()
  expenseId: number;
}
