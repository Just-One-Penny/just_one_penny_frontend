import { User } from 'types/User';

/* --- STATE --- */
export interface AuthenticationState {
  email: string;
  password: string;
  fullName: string;
  loading: boolean;
  error?: AuthenticationErrorType | null;
}

interface Token {
  accessToken: string;
  expiresIn: string;
  refreshToken: string;
  tokenType: string;
}

export interface AuthenticationSuccess {
  token: Token;
  user: User;
}

export enum AuthenticationErrorType {
  INCORRECT_CREDENTIALS = 1,
  EMAIL_EMPTY = 2,
  PASSWORD_EMPTY = 3,
  EMAIL_TAKEN = 4,
}

export type ContainerState = AuthenticationState;
