import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserValue } from '@src/user/domain/user.value';
import { UserServiceInterface } from '@user/application/ports/user.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly _userSrv: UserServiceInterface,
  ) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this._userSrv.findUserById(id);
  }

  @Post()
  async createUser(@Body() user: UserValue) {
    return this._userSrv.createUser(user);
  }
}
