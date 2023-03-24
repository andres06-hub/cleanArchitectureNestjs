export class Response {
  constructor(success: boolean, message: string, data?: object) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  private success: boolean;
  private message: string;
  private data?: object;
}
