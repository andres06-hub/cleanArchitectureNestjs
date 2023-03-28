import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { AuthServiceInterface } from '@auth/application/ports/auth.port';
import { Response } from '@auth/domain/dto/response.dto';
import { LoginModel } from '@auth/domain/models/auth.model';
import { AuthRepository } from '@auth/domain/repositories/userRepository.interface';
import { Encryption } from '@auth/domain/interfaces/encryption.interface';
import { UserModel } from '@auth/domain/models/auth.model';
import {
  JwtPayload,
  TokenSrvInterface,
} from '@src/auth/domain/interfaces/jwt.interface';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    private readonly authRpt: AuthRepository,
    private readonly encryption: Encryption,
    private readonly tokenSrv: TokenSrvInterface,
  ) {}

  private log: Logger = new Logger();

  async login(data: LoginModel): Promise<Response> {
    const findUser: UserModel | null = await this.authRpt.findUserByEmail(
      data.email,
    );
    if (!findUser)
      // User Not found
      throw new ForbiddenException(
        new Response(false, 'Incorrect credentials!'),
      );

    const pwd: boolean = await this.encryption.unencrypt(
      data.password,
      findUser.password,
    );
    if (!pwd)
      throw new ForbiddenException(
        new Response(false, 'Incorrect credentials'),
      );
    // Create Token
    const token: string = await this.tokenSrv.createToken<JwtPayload>({
      publicId: findUser.email,
      name: findUser.name,
    });
    this.log.log('Successfully log-in', new Date(), AuthService.name);
    //Return JWT
    return new Response(true, 'Successfully log-in!', { token });
  }

  async isValidToken(token: string): Promise<Response> {
    await this.tokenSrv.checkToken(token);
    this.log.log('Token valid', new Date(), AuthService.name);
    return new Response(true, 'Valid Token');
  }
}
