import { UserModel } from '@auth/domain/models/auth.model';

export interface AuthRepository {
  finduserByEmail(email: string): Promise<UserModel>;
}
