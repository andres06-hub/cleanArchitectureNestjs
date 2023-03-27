import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthServiceInterface } from '@auth/application/ports/auth.port';
import { Response } from '@src/auth/domain/dto/response.dto';
import { LoginModel } from '@src/auth/domain/models/auth.model';
import { AuthRepository } from '@src/auth/domain/repositories/userRepository.interface';
import { Encryption } from '@src/auth/domain/interfaces/encryption.interface';
import { UserModel } from '@src/user/domain/models/user.model';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    private readonly authRpt: AuthRepository,
    private readonly encryption: Encryption,
  ) {}

  async login(data: LoginModel): Promise<Response> {
    const findUser: UserModel | null = await this.authRpt.finduserByEmail(
      data.email,
    );
    if (!findUser)
      throw new NotFoundException(new Response(true, 'User not found!'));

    const pwd: boolean = await this.encryption.unencrypt(
      data.password,
      findUser.password,
    );
    if (!pwd)
      throw new ForbiddenException(
        new Response(false, 'Incorrect credentials'),
      );
    //Create Token
    // const token: string = this._jwtSrv.sign({
    //   publicId: findUser.publicId,
    //   name: findUser.name,
    // });
    //Return JWT
    return new Response(true, 'Successfully logged in!');
  }
}
