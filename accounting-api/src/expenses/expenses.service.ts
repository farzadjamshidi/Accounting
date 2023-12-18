import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Consumer } from '../app/models/consumer.model';
import { Expense } from '../app/models/expense.model';
import { Payer } from '../app/models/payer.model';
import { ConsumersService } from '../consumers/consumers.service';
import { EventsService } from '../events/events.service';
import { PayersService } from '../payers/payers.service';
import { CreateExpensesDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService
{

  constructor(
    private dataSource: DataSource,
    private consumersService: ConsumersService,
    private payersService: PayersService,
    private eventsService: EventsService
  )
  {
  }

  async create(createExpensesDto: CreateExpensesDto)
  {

    const eventId = createExpensesDto.expenses[0].eventId;

    await this.removeByEventId(eventId);

    const result = [];

    for (const createExpenseDto of createExpensesDto.expenses)
    {

      const expense = new Expense();
      expense.name = createExpenseDto.name;
      expense.price = createExpenseDto.price;
      expense.event = await this.eventsService.findOne(createExpenseDto.eventId);

      await this.dataSource.manager.save(expense);

      createExpenseDto.consumers.forEach(async (consumer: Consumer) =>
      {
        consumer.expenseId = expense.id;
      });

      await this.consumersService.createMultiple(createExpenseDto.consumers);

      createExpenseDto.payers.forEach((payer: Payer) =>
      {
        payer.expenseId = expense.id;
      });

      await this.payersService.createMultiple(createExpenseDto.payers);

      result.push({
        id: expense.id,
        name: expense.name
      });
    }

    return result;
  }

  async findAll(groupId: number)
  {
    // return await this.dataSource.manager.find<Expense[]>(
    //   Expense,
    //   { where: [{ groupId: groupId }] }
    // );
  }

  async findOne(id: number)
  {
    const expense = await this.dataSource.manager.findOne(Expense, {
      relations: {
        consumers: true,
        payers: true
      },
      where: { id: id }
    });

    return expense;
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto)
  {
    return await this.dataSource.manager.update(
      Expense,
      id,
      updateExpenseDto
    );
  }

  async remove(id: number)
  {
    return await this.dataSource.manager.delete(
      Expense,
      {
        id
      }
    );
  }

  async removeByEventId(eventId: number)
  {
    return await this.dataSource.manager.delete(
      Expense,
      {
        eventId: eventId
      }
    );
  }
}
