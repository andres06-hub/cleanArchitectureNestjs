export interface Encryption {
  unencrypt(raw: string, hash: string): Promise<string>;
}
