import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Group } from './group.model';

@Entity()
export class User extends BaseModel
{
  @Column()
  name: string;

  // @Column()
  // username: string;

  // @Column()
  // password: string;

  // @Column()
  // email: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Group, group => group.users)
  groups: Group[];

  // @OneToMany(() => UserSession, userSession => userSession.user)
  // sessions: UserSession[];

  // @OneToOne(() => Person, person => person.user)
  // person: Person;
}
