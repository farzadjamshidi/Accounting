import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Event } from './event.model';
import { Member } from './member.model';

@Entity()
export class Group extends BaseModel
{
  @Column()
  name: string;

  @ManyToMany(() => Member, member => member.groups)
  @JoinTable()
  members: Member[];

  @OneToMany(() => Event, event => event.group)
  events: Event[];
}
