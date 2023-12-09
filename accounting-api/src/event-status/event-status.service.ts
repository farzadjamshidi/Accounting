import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { EventStatus } from '../app/models/event-status.model';

@Injectable()
export class EventStatusService
{

  constructor(
    private dataSource: DataSource
  )
  {
  }

  async findAll()
  {
    return await this.dataSource.manager.find<EventStatus[]>(EventStatus);
  }

  async findOne(id: number)
  {
    const eventStatus = await this.dataSource.manager.findOneBy<EventStatus>(
      EventStatus,
      {
        id: id
      }
    );
    return eventStatus;
  }
}
