import { Module } from '@nestjs/common';
import { databaseProviders } from '@src/database/db.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
