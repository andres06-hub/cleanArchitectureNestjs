export interface Unencrypted {
  encrypt(data: string): Promise<string>;
}
