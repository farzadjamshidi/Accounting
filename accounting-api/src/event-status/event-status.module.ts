import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStatus } from '../app/models/event-status.model';
import { EventStatusService } from './event-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventStatus])],
  controllers: [],
  providers: [EventStatusService],
})
export class EventStatusModule { }
