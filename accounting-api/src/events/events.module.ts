import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../app/models/event.model';
import { ConsumersService } from '../consumers/consumers.service';
import { EventStatusService } from '../event-status/event-status.service';
import { GroupsService } from '../groups/groups.service';
import { PayersService } from '../payers/payers.service';
import { UsersService } from '../users/users.service';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventsController],
  providers: [
    EventsService,
    EventStatusService,
    GroupsService,
    ConsumersService,
    PayersService,
    UsersService
  ],
})
export class EventsModule { }
