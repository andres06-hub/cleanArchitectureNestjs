import { UserValue } from '@user/domain/user.value';
import { UserModel } from '@user/domain/models/user.model';

export interface UserRepository {
  findUserByPublicId(publicId: string): Promise<UserModel | null>;
  findUserByEmail(email: string): Promise<UserModel | null>;
  createUser(user: UserValue): Promise<UserModel>;
}
