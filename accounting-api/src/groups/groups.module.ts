import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../app/models/group.model';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule { }
