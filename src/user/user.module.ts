import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/user.controller';
import { UserService } from './application/user.service';
import { UserServiceInterface } from './application/user.interface';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
  ],
  exports: [],
})
export class UserModule {}
