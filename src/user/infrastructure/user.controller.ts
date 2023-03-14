import { Controller, Get, Inject } from '@nestjs/common';
import { UserServiceInterface } from '../application/user.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly _userSrv: UserServiceInterface,
  ) {}

  @Get()
  async getUser(id: string) {
    return this._userSrv.getUser(id);
  }
}
