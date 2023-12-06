import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { User } from './user.model';

@Entity()
export class Group extends BaseModel
{
  @Column()
  name: string;

  @ManyToMany(() => User, user => user.groups)
  @JoinTable()
  users: User[];
}
