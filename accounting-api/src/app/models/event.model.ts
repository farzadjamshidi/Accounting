import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { EventStatus } from './event-status.model';
import { Expense } from './expense.model';
import { Group } from './group.model';

@Entity()
export class Event extends BaseModel
{
  @Column()
  name: string;

  @ManyToOne(() => Group, group => group.events)
  group: Group;

  @Column()
  groupId: number;

  @ManyToOne(() => EventStatus, status => status.events)
  status: EventStatus;

  @Column()
  statusId: number;

  @OneToMany(() => Expense, expense => expense.event)
  expenses: Expense[];
}
