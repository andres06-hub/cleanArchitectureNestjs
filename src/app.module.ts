import { Module } from '@nestjs/common';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ProvidersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
