import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class User extends BaseModel
{
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isActive: boolean;

  // @ManyToMany(() => Group, group => group.members)
  // groups: Group[];

  // @OneToMany(() => Consumer, consumer => consumer.member)
  // consumers: Consumer[];

  // @OneToMany(() => Payer, payer => payer.member)
  // payers: Payer[];
}
