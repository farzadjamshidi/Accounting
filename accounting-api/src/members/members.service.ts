import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Member } from '../app/models/member.model';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService
{

  constructor(private dataSource: DataSource)
  {
  }


  async create(createMemberDto: CreateMemberDto)
  {

    const member = new Member();
    member.name = createMemberDto.name;
    await this.dataSource.manager.save(member);

    return {
      id: member.id,
      name: member.name
    };
  }

  async findAll()
  {
    return await this.dataSource.manager.find<Member[]>(Member);
  }

  async findOne(id: number)
  {
    const member = await this.dataSource.manager.findOneBy<Member>(
      Member,
      {
        id: id
      }
    );
    return member;
  }

  async update(id: number, updateMemberDto: UpdateMemberDto)
  {
    return await this.dataSource.manager.update(
      Member,
      id,
      updateMemberDto
    );
  }

  async remove(id: number)
  {
    return await this.dataSource.manager.delete(
      Member,
      {
        id
      }
    );
  }
}
