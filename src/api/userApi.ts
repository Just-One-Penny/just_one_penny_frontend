import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import { Credentials, Token, User } from 'types/User';
import { apiConfig } from './api.config';

export const authStorageKey = 'jop_auth_token';

export class UserApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public getToken = () => {
    // if we were a real auth provider, this is where we would make a request
    // to retrieve the user's token. (It's a bit more complicated than that...
    // but you're probably not an auth provider so you don't need to worry about it).
    return localStorage.getItem(authStorageKey);
  };

  public userLogin = (credentials: Credentials): Promise<string | Token> => {
    return this.post<string, Credentials, AxiosResponse<string>>(
      '/auth/login',
      credentials,
    ).then(this.success);
  };

  public userRegister = (credentials: Credentials): Promise<number> => {
    return this.post<number, Credentials, AxiosResponse<number>>(
      '/auth/register',
      credentials,
    )
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        throw error;
      });
  };

  public getAllUsers = async (): Promise<User[]> => {
    try {
      const res: AxiosResponse<User[]> = await this.get<
        User,
        AxiosResponse<User[]>
      >('/users');

      return this.success(res);
    } catch (error) {
      throw error;
    }
  };

  public getById = (id: number): Promise<User> => {
    return this.get<User, AxiosResponse<User>>(`/users/${id}`).then(
      this.success,
    );
  };

  //MINE

  public getDonatedCharities = (id: number): Promise<User> => {
    return this.get<User, AxiosResponse<User>>(`/users/${id}/charities`).then(
      this.success,
    );
  };

  public getProfile = (): Promise<User> => {
    return this.get<User, AxiosResponse<User>>(`/users/profile`).then(
      this.success,
    );
  };

  public logout = () => {
    localStorage.removeItem(authStorageKey);
  };
}

export const userApi = new UserApi(apiConfig);
