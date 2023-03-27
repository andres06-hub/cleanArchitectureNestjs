import { Module } from '@nestjs/common';
import { UserController } from '@user/infrastructure/controllers/user.controller';
import {
  UserDbProvider,
  UserSrvIntProvider,
} from '@src/user/infrastructure/providers/user.provider';
import { DatabaseModule } from '@src/database/database.module';
import { DatabaseUserRepository } from '@user/infrastructure/repositories/user.repository';
import { EncryptionService } from './application/usecases/encryption/encryption.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserDbProvider,
    DatabaseUserRepository,
    EncryptionService,
    UserSrvIntProvider,
  ],
  exports: [],
})
export class UserModule {}
