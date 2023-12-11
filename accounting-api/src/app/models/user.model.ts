import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Consumer } from './consumer.model';
import { Group } from './group.model';
import { Payer } from './payer.model';

@Entity()
export class User extends BaseModel
{
  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Group, group => group.users)
  groups: Group[];

  @OneToMany(() => Consumer, consumer => consumer.user)
  consumers: Consumer[];

  @OneToMany(() => Payer, payer => payer.user)
  payers: Payer[];
}
