import { DataSource } from 'typeorm';
import { User } from '@auth/infrastructure/entities/user.entity';
import { AuthService } from '@auth/application/usecases/auth.service';
import { DatabaseUserRepository } from '@auth/infrastructure/repositories/auth.repository';
import { AUTH_PORT_SERVICE } from '@auth/application/ports/auth.port';
import { EncryptionService } from '@auth/application/usecases/encryption/encryption.service';

export const UserDbProvider = {
  provide: 'USER_CONNECTION',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: ['DATA_SOURCE'],
};

export const AuthSrvProvider = {
  inject: [DatabaseUserRepository, EncryptionService],
  provide: AUTH_PORT_SERVICE,
  useFactory: (
    dbUserRepository: DatabaseUserRepository,
    encryption: EncryptionService,
  ) => new AuthService(dbUserRepository, encryption),
};
