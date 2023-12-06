import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Group } from '../app/models/group.model';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupsService
{

  constructor(private dataSource: DataSource)
  {
  }


  async create(createGroupDto: CreateGroupDto)
  {
    const group = new Group();
    group.name = createGroupDto.name;
    group.users = createGroupDto.users;
    await this.dataSource.manager.save(group);

    return {
      id: group.id,
      name: group.name,
      users: group.users
    };
  }

  async findAll()
  {
    return await this.dataSource.manager.find<Group[]>(Group);
  }

  async findOne(id: number)
  {
    const group = await this.dataSource.manager.findOne(Group, {
      relations: {
        users: true,
      },
      where: { id: id }
    });

    return group;
  }

  async update(id: number, updateGroupDto: UpdateGroupDto)
  {
    return await this.dataSource.manager.update(
      Group,
      id,
      updateGroupDto
    );
  }

  async remove(id: number)
  {
    return await this.dataSource.manager.delete(
      Group,
      {
        id
      }
    );
  }
}
