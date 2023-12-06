import { Module } from '@nestjs/common';

import { GroupsModule } from '../groups/groups.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';

const appModules = [
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
