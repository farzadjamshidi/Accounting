import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseModel } from "./base.model";
import { Consumer } from "./consumer.model";
import { Event } from "./event.model";
import { Payer } from "./payer.model";

@Entity()
export class Expense extends BaseModel
{
  @Column()
  name: string;

  @OneToMany(() => Consumer, consumer => consumer.user)
  consumers: Consumer[];

  @OneToMany(() => Payer, payer => payer.user)
  payers: Payer[];

  @Column("double precision")
  price: number;

  @ManyToOne(() => Event, event => event.expenses)
  event: Event;

  @Column()
  eventId: number;
}
