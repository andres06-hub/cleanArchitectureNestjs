import { UserModel } from '@auth/domain/models/user.model';

export interface UserRepository {
  finduserByEmail(email: string): Promise<UserModel>;
}
