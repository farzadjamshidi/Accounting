import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Payer } from '../app/models/payer.model';

@Injectable()
export class PayersService
{

  constructor(
    private dataSource: DataSource
  )
  {
  }

  async createMultiple(payers: Payer[])
  {
    const payersToSave = payers.map(data =>
    {
      const payer = new Payer();
      Object.assign(payer, data);
      return payer;
    });

    await this.dataSource.manager.save<Payer>(payersToSave);
  }

  async findAllByExpenseId(id: number)
  {
    return await this.dataSource.manager.findBy<Payer>(
      Payer,
      {
        expenseId: id
      }
    );
  }

  async findOne(id: number)
  {
    const payer = await this.dataSource.manager.findOneBy<Payer>(
      Payer,
      {
        id: id
      }
    );
    return payer;
  }
}
