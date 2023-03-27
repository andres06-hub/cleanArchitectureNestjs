import { Injectable } from '@nestjs/common';
import { Encryption } from '@src/user/domain/interfaces/encryption.interface';
import { hash } from 'bcrypt';

@Injectable()
export class EncryptionService implements Encryption {
  async encrypt(data: string): Promise<string> {
    return await hash(data, 10);
  }
}
