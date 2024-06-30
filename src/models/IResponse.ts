import { IUser } from "./IUser";
import { ITokens } from "./ITokens";

export interface LoginResponse {
  message: string;
  tokens: ITokens;
  user: IUser;
}

export interface RegisterResponse {
  message: string;
  email: string;
  tokens: ITokens;
}

export interface LogoutResponse {
  message: string;
  userId: number;
}
