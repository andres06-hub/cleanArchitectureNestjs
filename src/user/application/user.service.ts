import { Injectable } from '@nestjs/common';
import { UserRepository } from '@src/user/domain/repositories/userRepository.interface';
import { UserValue } from '@user/domain/user.value';
import { UserServiceInterface } from '@user/application/ports/user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(private userReposirory: UserRepository) {}

  async findUserById(publicId: string): Promise<UserValue> {
    console.log('Get User...' + publicId);
    const user: UserValue = await this.userReposirory.findUserByPublicId(
      publicId,
    );
    console.log(user);
    return user;
  }
  async createUser(user: UserValue): Promise<UserValue> {
    user = { ...user, publicId: uuidv4().split('-')[0] };
    const newUser: UserValue = new UserValue(user);
    const userCreated = await this.userReposirory.createUser(newUser);
    console.log('User: ', userCreated);
    return userCreated;
  }
}
