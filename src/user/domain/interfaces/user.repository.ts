import { UserEntity } from './user.entity';

export interface UserRepository {
  findUserById(id: string): Promise<UserEntity | null>;
  registerUser({ id, name, email, password }): Promise<UserEntity | null>;
  getUsers(): Promise<UserEntity[] | null>;
}
