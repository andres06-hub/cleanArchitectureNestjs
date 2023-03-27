import { HttpException, Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '@user/domain/repositories/userRepository.interface';
import { UserValue } from '@user/domain/user.value';
import { UserServiceInterface } from '@user/application/ports/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from '@user/domain/models/user.model';
import { Response } from '@user/domain/dto/response.dto';
import { Encryption } from '@src/user/domain/interfaces/encryption.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    private readonly userReposirory: UserRepository,
    private readonly encryption: Encryption,
  ) {}

  private log: Logger = new Logger();

  async findUserById(publicId: string): Promise<Response> {
    const user: UserValue = await this.userReposirory.findUserByPublicId(
      publicId,
    );
    this.log.log('User found');
    return new Response(true, 'User found!', user);
  }
  async createUser(user: UserModel): Promise<Response> {
    const findUser: UserValue | null =
      await this.userReposirory.findUserByEmail(user.email);
    if (findUser)
      throw new HttpException(new Response(true, 'User Exists!'), 200);
    const pwdhash: string = await this.encryption.encrypt(user.password);
    user = { ...user, publicId: uuidv4().split('-')[0], password: pwdhash };
    const newUser: UserValue = new UserValue(user);
    const userCreated = await this.userReposirory.createUser(newUser);
    this.log.log('User created');
    return new Response(true, 'User Created!', userCreated);
  }
}
