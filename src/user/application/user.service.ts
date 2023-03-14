import { Injectable } from '@nestjs/common';
import { UserServiceInterface } from './user.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  async getUser(id: string) {
    console.log('Get Users...');
    return 'HELLO WORLD';
  }
}
