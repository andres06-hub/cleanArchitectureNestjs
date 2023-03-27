import { UserModel } from '@auth/domain/models/auth.model';

export interface AuthRepository {
  findUserByEmail(email: string): Promise<UserModel>;
}
