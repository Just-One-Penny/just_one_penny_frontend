export interface User {
  email: string;
  fullName: string;
  services: string;
  role: string;
  picture: string;
}

export interface Token {
  token: Promise<string | Token>;
}

export interface Credentials {
  email: string;
  password: string;
  fullName?: string;
}
