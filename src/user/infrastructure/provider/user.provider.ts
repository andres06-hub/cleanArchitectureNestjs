import { DataSource } from 'typeorm';
import { User } from '../models/user.model';
import { USER_SERVICE_INTERFACE } from 'src/user/application/user.interface';
import { UserService } from '../../application/user.service';

export const UserDbProvider = {
  provide: 'USER_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: ['DATA_SOURCE'],
};

export const UserSrvIntProvider = {
  provide: USER_SERVICE_INTERFACE,
  useClass: UserService,
};
