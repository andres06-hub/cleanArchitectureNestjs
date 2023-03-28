import { Response } from '@auth/domain/dto/response.dto';
import { LoginModel } from '@auth/domain/models/auth.model';

export const AUTH_PORT_SERVICE = 'authPortService';

export interface AuthServiceInterface {
  login(data: LoginModel): Promise<Response>;
  isValidToken(token: string): Promise<Response>;
}
