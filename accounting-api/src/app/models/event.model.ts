import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model';
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
}
