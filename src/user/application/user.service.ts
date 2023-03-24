import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from '@user/domain/repositories/userRepository.interface';
import { UserValue } from '@user/domain/user.value';
import { UserServiceInterface } from '@user/application/ports/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from '@user/domain/models/user.model';
import { Response } from '@user/domain/dto/response.dto';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(private userReposirory: UserRepository) {}

  async findUserById(publicId: string): Promise<Response> {
    console.log('Get User...' + publicId);
    const user: UserValue = await this.userReposirory.findUserByPublicId(
      publicId,
    );
    console.log(user);
    return new Response(true, 'User found!', user);
  }
  async createUser(user: UserModel): Promise<Response> {
    const findUser: UserValue | null =
      await this.userReposirory.findUserByEmail(user.email);
    if (findUser)
      throw new HttpException(new Response(true, 'User Exists!'), 200);
    user = { ...user, publicId: uuidv4().split('-')[0] };
    const newUser: UserValue = new UserValue(user);
    const userCreated = await this.userReposirory.createUser(newUser);
    console.log('User: ', userCreated);
    return new Response(true, 'User Created!', userCreated);
  }
}
