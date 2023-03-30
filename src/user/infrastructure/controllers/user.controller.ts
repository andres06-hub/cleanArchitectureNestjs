import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  USER_PORT_SERVICE,
  UserServiceInterface,
} from '@user/application/ports/user.interface';
import { UserDto } from '@user/domain/dto/user.dto';

@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(
    @Inject(USER_PORT_SERVICE)
    private readonly _userSrv: UserServiceInterface,
  ) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getUser(@Param('id') id: string) {
    return this._userSrv.findUserById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(ValidationPipe)
  async createUser(@Body() user: UserDto) {
    return this._userSrv.createUser(user);
  }
}
