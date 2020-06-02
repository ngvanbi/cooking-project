import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from '@user/dto/userLogin.dto';
import { UsersService } from '@user/users.service';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    const user = this.authService.login(loginUser);
    return user;
  }
}
