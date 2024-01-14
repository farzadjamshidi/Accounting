import { Module } from '@nestjs/common';

import { ConsumersModule } from '../consumers/consumers.module';
import { EventStatusModule } from '../event-status/event-status.module';
import { EventsModule } from '../events/events.module';
import { ExpensesModule } from '../expenses/expenses.module';
import { GroupsModule } from '../groups/groups.module';
import { MembersModule } from '../members/members.module';
import { PayersModule } from '../payers/payers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';

const appModules = [
  ConsumersModule,
  PayersModule,
  ExpensesModule,
  EventStatusModule,
  EventsModule,
  GroupsModule,
  MembersModule
];
@Module({
  imports: [
    ...appModules,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
