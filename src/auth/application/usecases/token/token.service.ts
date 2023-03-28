import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Response } from '@src/auth/domain/dto/response.dto';
import {
  JwtPayload,
  TokenSrvInterface,
} from '@src/auth/domain/interfaces/jwt.interface';
import { JwtService } from '@src/auth/domain/types/jwt.type';
import {
  JsonWebTokenError,
  TokenExpiredError,
  VerifyErrors,
} from 'jsonwebtoken';

@Injectable()
export class TokenService implements TokenSrvInterface {
  constructor(private readonly jwtSrv: JwtService) {}

  private log: Logger = new Logger();

  async createToken<T>(data: T): Promise<string> {
    return this.jwtSrv.signAsync({ data });
  }
  async checkToken(token: string): Promise<boolean> {
    const getRawToken: string = token.split(' ')[1];
    try {
      const isvalid: VerifyErrors | JwtPayload = await this.jwtSrv.verifyAsync(
        getRawToken,
      );
      console.log('Valid: ', isvalid);
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        this.log.error(
          new TokenExpiredError(error.message, error.expiredAt),
          error.expiredAt,
          'JWT',
        );
        throw new UnauthorizedException(
          new Response(false, ' Unauthorized', {
            name: error.name,
            message: error.message,
          }),
        );
      }
      if (error instanceof JsonWebTokenError) {
        this.log.error(
          new JsonWebTokenError(error.message, error.inner),
          new Date(),
          'JWT',
        );
        throw new UnauthorizedException(
          new Response(false, 'Unauthorized', {
            name: error.name,
            message: error.message,
          }),
        );
      }
      this.log.error(error, 'JWT');
    }
    return true;
  }
}
