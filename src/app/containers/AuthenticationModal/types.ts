import { User } from 'types/User';

/* --- STATE --- */
export interface AuthenticationModalState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  loading: boolean;
  error?: AuthenticationModalErrorType | null;
}

export interface Donations {
  amount: number;
}

interface Token {
  accessToken: string;
  expiresIn: string;
  refreshToken: string;
  tokenType: string;
}

export interface AuthenticationModalSuccess {
  token: Token;
  user: User;
}

export enum AuthenticationModalErrorType {
  INCORRECT_CREDENTIALS = 1,
  EMAIL_EMPTY = 2,
  PASSWORD_EMPTY = 3,
  EMAIL_TAKEN = 4,
}

export type ContainerState = AuthenticationModalState;
