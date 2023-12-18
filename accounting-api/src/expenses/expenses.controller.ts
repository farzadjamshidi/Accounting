import
{
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { CreateExpensesDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController
{
  constructor(private readonly expensesService: ExpensesService) { }

  @Post()
  create(@Body() createExpensesDto: CreateExpensesDto)
  {
    return this.expensesService.create(createExpensesDto);
  }

  @Get()
  findAll(@Query() { groupId }: { groupId: number; })
  {
    return this.expensesService.findAll(groupId);
  }

  @Get(':id')
  findOne(@Param('id') id: string)
  {
    return this.expensesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto)
  {
    return this.expensesService.update(+id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string)
  {
    return this.expensesService.remove(+id);
  }
}
