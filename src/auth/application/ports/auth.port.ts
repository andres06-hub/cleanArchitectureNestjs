import { Response } from '@src/auth/domain/dto/response.dto';
import { LoginModel } from '@src/auth/domain/models/auth.model';

export const AUTH_PORT_SERVICE = 'authPortService';

export interface AuthServiceInterface {
  login(data: LoginModel): Promise<Response>;
}
