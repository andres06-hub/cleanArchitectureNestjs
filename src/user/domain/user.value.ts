import { UserModel } from '@src/user/domain/models/user.model';

export class UserValue implements UserModel {
  id: number;
  publicId: string;
  name: string;
  email: string;
  password: string;

  constructor({
    id,
    publicId,
    name,
    email,
    password,
  }: {
    id: number;
    publicId: string;
    name: string;
    email: string;
    password: string;
  }) {
    this.id = id;
    this.publicId = publicId;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
