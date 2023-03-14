import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/user.controller';
import {
  UserDbProvider,
  UserSrvIntProvider,
} from './infrastructure/provider/user.provider';
import { DatabaseModule } from 'src/providers/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserDbProvider, UserSrvIntProvider],
  exports: [],
})
export class UserModule {}
