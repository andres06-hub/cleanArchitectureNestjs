import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '@user/domain/repositories/userRepository.interface';
import { UserValue } from '@user/domain/user.value';
import { Repository } from 'typeorm';
import { User } from '@user/infrastructure/entities/user.entity';
import { UserModel } from '@user/domain/models/user.model';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @Inject('USER_CONNECTION')
    private readonly userRepository: Repository<User>,
  ) {}

  async findUserByPublicId(publicId: string): Promise<UserModel | null> {
    const user: User | null = await this.userRepository.findOne({
      where: { publicId },
    });
    return user;
  }

  async createUser(user: UserValue): Promise<UserModel> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async findUserByEmail(email: string): Promise<UserModel | null> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  toUserEntiry(data: UserModel): User {
    const user: User = new User();
    user.id = data.id;
    user.publicId = data.publicId;
    user.name = data.name;
    user.password = data.password;
    user.email = data.email;
    return user;
  }
}
