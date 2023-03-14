export const USER_REPOSITORY = 'USER REPOSITORY';

export interface UserRepository {
  findUserById(id: string): Promise<string>;
}
