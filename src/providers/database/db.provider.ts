import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '@src/user/infrastructure/entities/user.entity';
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
      logger.log('Connection DataBase');
      return x;
    },
  },
];
