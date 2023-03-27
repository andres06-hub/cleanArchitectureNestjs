import { DataSource } from 'typeorm';
import { User } from '@src/user/infrastructure/entities/user.entity';
import { USER_SERVICE_INTERFACE } from '@user/application/ports/user.interface';
import { UserService } from '@user/application/usecases/user.service';
import { DatabaseUserRepository } from '../repositories/user.repository';
import { EncryptionService } from '@src/user/application/usecases/encryption/encryption.service';

export const UserDbProvider = {
  provide: 'USER_CONNECTION',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: ['DATA_SOURCE'],
};

export const UserSrvIntProvider = {
  inject: [DatabaseUserRepository, EncryptionService],
  provide: USER_SERVICE_INTERFACE,
  useFactory: (
    dbUserRpository: DatabaseUserRepository,
    encryptionSrv: EncryptionService,
  ) => new UserService(dbUserRpository, encryptionSrv),
};
