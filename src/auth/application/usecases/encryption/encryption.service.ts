import { Injectable } from '@nestjs/common';
import { Encryption } from '@src/auth/domain/interfaces/encryption.interface';
import { compareSync } from 'bcrypt';

@Injectable()
export class EncryptionService implements Encryption {
  async unencrypt(raw: string, hash: string): Promise<boolean> {
    return compareSync(raw, hash);
  }
}
