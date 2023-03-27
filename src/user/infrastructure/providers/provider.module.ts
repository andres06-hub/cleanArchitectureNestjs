import { DynamicModule, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { DatabaseUserRepository } from '../repositories/user.repository';
import { EncryptionService } from '@src/user/application/usecases/encryption/encryption.service';
import { USER_SERVICE_INTERFACE } from '@src/user/application/ports/user.interface';
import { UserService } from '@src/user/application/usecases/user.service';
import { DatabaseModule } from '@src/providers/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    // DatabaseUserRepository,
    // EncryptionService,
  ],
})
export class ProviderModule {
  static register(): DynamicModule {
    return {
      module: ProviderModule,
      providers: [
        {
          provide: 'USER_CONNECTION',
          useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(User),
          inject: ['DATA_SOURCE'],
        },
        {
          inject: [DatabaseUserRepository, EncryptionService],
          provide: USER_SERVICE_INTERFACE,
          useFactory: (
            dbUserRpository: DatabaseUserRepository,
            encryptionSrv: EncryptionService,
          ) => new UserService(dbUserRpository, encryptionSrv),
        },
      ],
    };
  }
}
