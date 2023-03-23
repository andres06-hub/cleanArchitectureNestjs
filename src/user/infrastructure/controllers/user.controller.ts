import { Controller, Get, Inject, Param } from '@nestjs/common';
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
}
