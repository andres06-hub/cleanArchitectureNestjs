import { Injectable } from '@nestjs/common';
import { UserRepository } from '@user/domain/interfaces/user.repository';

@Injectable()
export class UserService implements UserRepository {
  async findUserById(id: string): Promise<string> {
    console.log('Get User...' + id);
    return `HELLO WORLD id: ${id}`;
  }
}
