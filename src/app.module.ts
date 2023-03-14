import { Module } from '@nestjs/common';
import { ProvidersModule } from '@providers/providers.module';
import { UserModule } from '@user/user.module';

@Module({
  imports: [ProvidersModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
