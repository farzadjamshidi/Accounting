import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from '../app/models/expense.model';
import { ConsumersService } from '../consumers/consumers.service';
import { EventStatusService } from '../event-status/event-status.service';
import { EventsService } from '../events/events.service';
import { GroupsService } from '../groups/groups.service';
import { MembersService } from '../members/members.service';
import { PayersService } from '../payers/payers.service';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpensesController],
  providers: [
    ExpensesService,
    EventsService,
    EventStatusService,
    GroupsService,
    ConsumersService,
    PayersService,
    MembersService
  ],
})
export class ExpensesModule { }
