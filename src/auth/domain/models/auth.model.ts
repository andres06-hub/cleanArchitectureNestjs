export interface UserModel {
  id: number;
  publicId: string;
  name: string;
  email: string;
  password: string;
}

export interface LoginModel {
  email: string;
  password: string;
}
