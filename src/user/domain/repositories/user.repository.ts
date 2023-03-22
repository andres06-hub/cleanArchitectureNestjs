import { UserValue } from '@user/domain/user.value';

export const USER_REPOSITORY = 'USER REPOSITORY';

export interface UserRepository {
  findUserById(id: string): Promise<string>;
  createUser(user: UserValue): Promise<UserValue>;
}
