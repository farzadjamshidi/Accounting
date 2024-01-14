import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../app/models/member.model';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule { }
