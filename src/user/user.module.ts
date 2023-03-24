import { Module } from '@nestjs/common';
import { UserController } from '@user/infrastructure/controllers/user.controller';
import {
  UserDbProvider,
  UserSrvIntProvider,
} from '@src/user/infrastructure/providers/user.provider';
import { DatabaseModule } from '@providers/database/database.module';
import { DatabaseUserRepository } from './infrastructure/repositories/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserDbProvider, DatabaseUserRepository, UserSrvIntProvider],
  exports: [],
})
export class UserModule {}
