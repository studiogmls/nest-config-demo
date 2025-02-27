import { Controller, ForbiddenException, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 查询用户
  @Get()
  getUser() {
    return this.userService.getUser();
  }

  // 通过id查询用户
  @Get(':id')
  getUserById(@Param('id') id: string) {
    if (id == '0') {
      throw new ForbiddenException({
        message: 'id为0，禁止访问',
      });
    }
    return this.userService.getUserById(id);
  }
}
