import { DataSource } from 'typeorm';
import { User } from '@src/user/infrastructure/entities/user.entity';
import { USER_SERVICE_INTERFACE } from '@user/application/ports/user.interface';
import { UserService } from '@user/application/user.service';

export const UserDbProvider = {
  provide: 'USER_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: ['DATA_SOURCE'],
};

export const UserSrvIntProvider = {
  provide: USER_SERVICE_INTERFACE,
  useClass: UserService,
};

export const UsernetitiesProvider = {
  provider: 'USER_MODEL',
  useFactory: () => [User],
};
