import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService
{
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn(email, pass)
  {
    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== pass)
    {
      throw new UnauthorizedException();
    }

    const { password, ...payload } = user;

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
