import { UserModel } from '@src/user/domain/models/user.model';

export class UserValue implements UserModel {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor({
    id,
    name,
    email,
    password,
  }: {
    id: number;
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
