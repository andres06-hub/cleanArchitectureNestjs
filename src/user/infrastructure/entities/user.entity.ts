import { UserModel } from '@src/user/domain/models/user.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User implements UserModel {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'publicId',
    nullable: false,
  })
  publicId: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;
}
