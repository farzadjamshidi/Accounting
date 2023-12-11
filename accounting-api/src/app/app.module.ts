import { Module } from '@nestjs/common';

import { EventStatusModule } from '../event-status/event-status.module';
import { EventsModule } from '../events/events.module';
import { ExpensesModule } from '../expenses/expenses.module';
import { GroupsModule } from '../groups/groups.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';

const appModules = [
  ExpensesModule,
  EventStatusModule,
  EventsModule,
  GroupsModule,
  UsersModule
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
