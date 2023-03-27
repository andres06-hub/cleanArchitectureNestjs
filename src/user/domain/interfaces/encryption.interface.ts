export interface Encryption {
  encrypt(data: string): Promise<string>;
}
