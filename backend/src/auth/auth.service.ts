import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { toUserDto } from '@shared';
import { UserEntity } from '@user/entity/user.entity';
import { LoginUserDto } from '../users/dto/userLogin.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(userLogin: LoginUserDto) {
    const user = await this.usersService.findByEmail(userLogin.email);
    if (user && user.checkPassword(userLogin.password)) {
      return toUserDto(user);
    }
    return null;
  }

  async login(userLogin: LoginUserDto): Promise<UserEntity> {
    const user = await this.usersService.findByEmail(userLogin.email);

    if (!user) {
      throw new HttpException(
        {
          error: 'User',
          message: 'User not found.',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    if (user.checkPassword(userLogin.password)) {
      throw new NotFoundException(`User doesn't exists`);
    }

    if (!user.isActive){
      // throw new RestEx
    }

    return user;
  }
}
