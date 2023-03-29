import {
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  AUTH_PORT_SERVICE,
  AuthServiceInterface,
} from '@auth/application/ports/auth.port';
import { Response } from '@auth/domain/dto/response.dto';
import { LoginDto } from '@auth/domain/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_PORT_SERVICE)
    private readonly authSrv: AuthServiceInterface,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async login(@Body() data: LoginDto): Promise<HttpException | Response> {
    const result: HttpException | Response = await this.authSrv.login(data);
    return result;
  }

  @Post('/validateToken')
  @HttpCode(HttpStatus.OK)
  async validate(@Headers('authorization') authorization: string): Promise<Response> {
    return this.authSrv.isValidToken(authorization);
  }
}
