import { UserValue } from '@user/domain/user.value';

export const USER_REPOSITORY = 'USER REPOSITORY';
export interface UserRepository {
  findUserByPublicId(publicId: string): Promise<UserValue | null>;
  findUserByEmail(email: string): Promise<UserValue | null>;
  createUser(user: UserValue): Promise<UserValue>;
}
