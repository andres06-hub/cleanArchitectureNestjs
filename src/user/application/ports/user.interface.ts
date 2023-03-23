import { UserValue } from '@src/user/domain/user.value';

export const USER_SERVICE_INTERFACE = 'UserServiceInterface';

export interface UserServiceInterface {
  findUserById(id: string): Promise<string>;
  createUser(user: UserValue): Promise<UserValue>;
}
