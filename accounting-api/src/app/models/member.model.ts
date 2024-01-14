import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Consumer } from './consumer.model';
import { Group } from './group.model';
import { Payer } from './payer.model';

@Entity()
export class Member extends BaseModel
{
  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Group, group => group.members)
  groups: Group[];

  @OneToMany(() => Consumer, consumer => consumer.member)
  consumers: Consumer[];

  @OneToMany(() => Payer, payer => payer.member)
  payers: Payer[];
}
