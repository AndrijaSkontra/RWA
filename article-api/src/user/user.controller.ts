import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  @Inject(UserService)
  userService: UserService;

  @Get("me")
  getMe() {
    return this.userService.getMe();
  }
}
