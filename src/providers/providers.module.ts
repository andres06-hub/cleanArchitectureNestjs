import { Module } from '@nestjs/common';
import { DatabaseModule } from '@providers/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [DatabaseModule],
})
export class ProvidersModule {}
