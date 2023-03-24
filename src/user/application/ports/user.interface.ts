import { Response } from '@src/user/domain/dto/response.dto';
import { UserValue } from '@src/user/domain/user.value';

export const USER_SERVICE_INTERFACE = 'UserServiceInterface';

export interface UserServiceInterface {
  findUserById(publicId: string): Promise<Response>;
  createUser(user: UserValue): Promise<Response>;
}
