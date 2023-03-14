import { UserEntity } from '@user/domain/interfaces/user.entity';

export class user implements UserEntity {
  name: string;
  email: string;
  password: string;

  constructor({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
