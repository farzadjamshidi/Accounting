import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payer } from '../app/models/payer.model';
import { PayersService } from './payers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Payer])],
  controllers: [],
  providers: [PayersService],
})
export class PayersModule { }
