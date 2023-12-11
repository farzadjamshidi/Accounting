import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Event } from './event.model';

@Entity()
export class EventStatus extends BaseModel
{
  @Column()
  name: string;

  @OneToMany(() => Event, event => event.status)
  events: Event[];
}
