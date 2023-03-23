import { Injectable } from '@nestjs/common';
import { UserRepository } from '@src/user/domain/repositories/user.repository';
import { UserValue } from '@user/domain/user.value';
import { UserServiceInterface } from '@user/application/ports/user.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  // constructor(private userReposirory: UserRepository) {}

  async findUserById(id: string): Promise<string> {
    console.log('Get User...' + id);
    return `HELLO WORLD id: ${id}`;
  }
  async createUser(user: UserValue): Promise<UserValue> {
    const newUser: UserValue = new UserValue(user);
    console.log(newUser);
    return newUser;
  }
}
