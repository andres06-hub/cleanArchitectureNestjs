import { Module } from '@nestjs/common';
import { UserController } from '@user/infrastructure/controllers/user.controller';
import {
  UserDbProvider,
  UserSrvIntProvider,
} from '@user/infrastructure/provider/user.provider';
import { DatabaseModule } from '@providers/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserDbProvider, UserSrvIntProvider],
  exports: [],
})
export class UserModule {}
