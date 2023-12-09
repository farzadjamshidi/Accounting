import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../app/models/event.model';
import { EventStatusService } from '../event-status/event-status.service';
import { GroupsService } from '../groups/groups.service';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventsController],
  providers: [EventsService, GroupsService, EventStatusService],
})
export class EventsModule { }
