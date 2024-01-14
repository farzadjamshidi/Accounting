import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../app/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService
{
  constructor(private dataSource: DataSource)
  {
  }


  async create(createUserDto: CreateUserDto)
  {

    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    await this.dataSource.manager.save(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }

  async findOne(id: number)
  {
    const user = await this.dataSource.manager.findOneBy<User>(
      User,
      {
        id: id
      }
    );

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  async findOneByEmail(email: string)
  {
    const user = await this.dataSource.manager.findOneBy<User>(
      User,
      {
        email: email
      }
    );
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto)
  {
    return await this.dataSource.manager.update(
      User,
      id,
      updateUserDto
    );
  }

  async remove(id: number)
  {
    return await this.dataSource.manager.delete(
      User,
      {
        id
      }
    );
  }
}
