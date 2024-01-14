import
{
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController
{
  constructor(private readonly usersService: MembersService) { }

  @Post()
  create(@Body() createMemberDto: CreateMemberDto)
  {
    return this.usersService.create(createMemberDto);
  }

  @Get()
  findAll()
  {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string)
  {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto)
  {
    return this.usersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string)
  {
    return this.usersService.remove(+id);
  }
}
