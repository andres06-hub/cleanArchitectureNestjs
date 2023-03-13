import { DataSource } from 'typeorm';
// import * as path from 'path';
// import * as appRootPath from 'app-root-path';
import { config } from 'dotenv';
// import { User } from 'src/models/user.entity';
import { Logger } from '@nestjs/common';

config({ path: 'db.env' });

const logger = new Logger();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        entities: [
          // `${path.join(
          //   appRootPath.path,
          //   // 'src',
          //   __dirname,
          //   'models',
          // )}/**/*.entity.{ts,js}`,
          // __dirname + '/../**/*.entity{.ts,.js}',
          // User,
        ],
        synchronize: true,
      });
      const x = await dataSource.initialize();
      logger.log('Connection DB');
      return x;
    },
  },
];
