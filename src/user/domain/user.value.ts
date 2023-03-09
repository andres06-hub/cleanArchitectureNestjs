import { UserEntity } from './interfaces/user.entity';

export class user implements UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor({
    id,
    name,
    email,
    password,
  }: {
    id: string;
    name: string;
    email: string;
    password: string;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
