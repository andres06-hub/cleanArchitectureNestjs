import { UserValue } from '@src/user/domain/user.value';

export const USER_SERVICE_INTERFACE = 'UserServiceInterface';

export interface UserServiceInterface {
  findUserById(id: string): Promise<UserValue>;
  createUser(user: UserValue): Promise<UserValue>;
}
