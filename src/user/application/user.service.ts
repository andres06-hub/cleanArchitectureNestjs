import { Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/interfaces/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRpt: UserRepository) {}

  async getUser(id: string) {
    return this._userRpt.findUserById(id);
  }
}
