import { Module } from '@nestjs/common';
import { databaseProviders } from '@providers/database/db.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
