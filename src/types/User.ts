export interface User {
  id: string;
  email: string;
  fullName: string;
  services: string;
  role: string;
  picture: string;
}

export interface UpdatingUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

export interface UpdatedUser {
  id: string;
  name: string;
  email?: string;
  role?: string;
  createdAt?: Date;
}

export interface Token {
  token: Promise<string | Token>;
}

export interface Credentials {
  email: string;
  password: string;
  fullName?: string;
}
