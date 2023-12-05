import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

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

  // @ManyToMany(() => Role, role => role.users)
  // @JoinTable()
  // roles: Role[];

  // @OneToMany(() => UserSession, userSession => userSession.user)
  // sessions: UserSession[];

  // @OneToOne(() => Person, person => person.user)
  // person: Person;
}
