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
import { UserServiceInterface } from '@user/application/ports/user.interface';
import { UserDto } from '@user/domain/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
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
