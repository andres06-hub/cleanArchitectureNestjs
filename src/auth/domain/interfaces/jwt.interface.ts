export interface JwtPayload {
  //Data going into the JWT payload
  publicId: string;
  name: string;
  iat?: number;
  exp?: number;
}

export interface TokenSrvInterface {
  createToken<T>(data: T): Promise<string>;
  checkToken(token: string): Promise<boolean>;
}
