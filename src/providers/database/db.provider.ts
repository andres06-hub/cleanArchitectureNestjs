import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '@user/infrastructure/models/user.model';
import { Logger } from '@nestjs/common';

config({ path: 'db.env' });

const logger = new Logger();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [User],
        synchronize: true,
      });
      const x = await dataSource.initialize();
      logger.log('Connection DB');
      return x;
    },
  },
];
