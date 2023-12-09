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
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController
{
  constructor(private readonly eventsService: EventsService) { }

  @Post()
  create(@Body() createEventDto: CreateEventDto)
  {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll(@Query() { groupId }: { groupId: number; })
  {
    return this.eventsService.findAll(groupId);
  }

  @Get(':id')
  findOne(@Param('id') id: string)
  {
    return this.eventsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto)
  {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string)
  {
    return this.eventsService.remove(+id);
  }
}
