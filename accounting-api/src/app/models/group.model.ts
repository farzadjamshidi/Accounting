import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Event } from './event.model';
import { User } from './user.model';

@Entity()
export class Group extends BaseModel
{
  @Column()
  name: string;

  @ManyToMany(() => User, user => user.groups)
  @JoinTable()
  users: User[];

  @OneToMany(() => Event, event => event.group)
  events: Event[];
}
