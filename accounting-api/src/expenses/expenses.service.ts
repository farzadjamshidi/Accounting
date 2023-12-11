import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Expense } from '../app/models/expense.model';
import { EventsService } from '../events/events.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService
{

  constructor(
    private dataSource: DataSource,
    private eventsService: EventsService
  )
  {
  }

  async create(createExpenseDto: CreateExpenseDto)
  {
    const expense = new Expense();
    expense.name = createExpenseDto.name;
    expense.price = createExpenseDto.price;
    expense.event = await this.eventsService.findOne(createExpenseDto.eventId);

    await this.dataSource.manager.save(expense);

    return {
      id: expense.id,
      name: expense.name
    };
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
    // const expense = await this.dataSource.manager.findOne(Expense, {
    //   relations: {
    //     group: true,
    //     status: true
    //   },
    //   where: { id: id }
    // });

    // return expense;
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
}
