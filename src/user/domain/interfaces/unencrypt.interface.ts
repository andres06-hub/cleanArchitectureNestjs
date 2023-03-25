export interface Unencrypted {
  unencrypted(hash: string, raw: string): Promise<boolean>;
}
