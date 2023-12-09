import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Event } from '../app/models/event.model';
import { EventStatusService } from '../event-status/event-status.service';
import { GroupsService } from '../groups/groups.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService
{

  constructor(
    private dataSource: DataSource,
    private eventStatusService: EventStatusService,
    private groupsService: GroupsService
  )
  {
  }


  async create(createEventDto: CreateEventDto)
  {
    const event = new Event();
    event.name = createEventDto.name;
    event.group = await this.groupsService.findOne(createEventDto.groupId);
    event.status = await this.eventStatusService.findOne(createEventDto.statusId || 1);
    await this.dataSource.manager.save(event);

    return {
      id: event.id,
      name: event.name,
      group: event.group,
      status: event.status
    };
  }

  async findAll(groupId: number)
  {
    return await this.dataSource.manager.find<Event[]>(
      Event,
      { where: [{ groupId: groupId }] }
    );
  }

  async findOne(id: number)
  {
    const event = await this.dataSource.manager.findOne(Event, {
      relations: {
        group: true,
        status: true
      },
      where: { id: id }
    });

    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto)
  {
    return await this.dataSource.manager.update(
      Event,
      id,
      updateEventDto
    );
  }

  async remove(id: number)
  {
    return await this.dataSource.manager.delete(
      Event,
      {
        id
      }
    );
  }
}
