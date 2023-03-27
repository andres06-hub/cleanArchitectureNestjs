import { Inject, Injectable } from '@nestjs/common';
import { AuthRepository } from '@auth/domain/repositories/userRepository.interface';
import { Repository } from 'typeorm';
import { UserModel } from '@auth/domain/models/auth.model';
import { User } from '@auth/infrastructure/entities/user.entity';

@Injectable()
export class DatabaseUserRepository implements AuthRepository {
  constructor(
    @Inject('USER_CONNECTION')
    private readonly userRepository: Repository<User>,
  ) {}

  async findUserByEmail(email: string): Promise<UserModel | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    return user;
  }
}
