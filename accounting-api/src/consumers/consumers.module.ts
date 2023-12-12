import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumer } from '../app/models/consumer.model';
import { ConsumersService } from './consumers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Consumer])],
  controllers: [],
  providers: [ConsumersService],
})
export class ConsumersModule { }
