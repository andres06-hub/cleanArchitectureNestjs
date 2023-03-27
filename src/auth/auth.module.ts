import { Module } from '@nestjs/common';
import { DatabaseModule } from '@database/database.module';
import { AuthController } from '@auth/infrastructure/controllers/auth.controller';
import {
  AuthSrvProvider,
  UserDbProvider,
} from '@auth/infrastructure/providers/auth.providers';
import { DatabaseUserRepository } from '@auth/infrastructure/repositories/auth.repository';
import { EncryptionService } from '@auth/application/usecases/encryption/encryption.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [
    UserDbProvider,
    DatabaseUserRepository,
    AuthSrvProvider,
    EncryptionService,
  ],
})
export class AuthModule {}
