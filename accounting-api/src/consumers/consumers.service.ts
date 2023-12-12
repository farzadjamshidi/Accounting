import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Consumer } from '../app/models/consumer.model';

@Injectable()
export class ConsumersService
{
  constructor(
    private dataSource: DataSource
  )
  {
  }

  async createMultiple(consumers: Consumer[])
  {
    const consumersToSave = consumers.map(data =>
    {
      const consumer = new Consumer();
      Object.assign(consumer, data);
      return consumer;
    });

    await this.dataSource.manager.save<Consumer>(consumersToSave);
  }

  async findAllByExpenseId(id: number)
  {
    return await this.dataSource.manager.findBy<Consumer>(
      Consumer,
      {
        expenseId: id
      }
    );
  }

  async findOne(id: number)
  {
    const consumer = await this.dataSource.manager.findOneBy<Consumer>(
      Consumer,
      {
        id: id
      }
    );
    return consumer;
  }
}
