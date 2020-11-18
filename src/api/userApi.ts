import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import {
  Credentials,
  SocialAuth,
  User,
  UpdatedUser,
  UpdatingUser,
} from 'types/User';
import { UpdatingBillingInfo, UpdatedBillingInfo } from 'types/Stripe';
import { apiConfig } from './api.config';
import { Charity } from 'types/Charity';

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

  public userLogin = (credentials: Credentials): Promise<User> => {
    return this.post<string, Credentials, AxiosResponse<User>>(
      '/auth/login',
      credentials,
    ).then(this.success);
  };

  public userAuthFacebook = (access_token: SocialAuth): Promise<User> => {
    return this.post<string, SocialAuth, AxiosResponse<User>>(
      '/auth/facebook',
      access_token,
    ).then(this.success);
  };
  public userAuthGoogle = (access_token: SocialAuth): Promise<User> => {
    return this.post<string, SocialAuth, AxiosResponse<User>>(
      '/auth/google',
      access_token,
    ).then(this.success);
  };

  public userRegister = (credentials: Credentials): Promise<User> => {
    return this.post<User, Credentials, AxiosResponse<User>>(
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

  public getCharities = async (id: number): Promise<Charity[]> => {
    try {
      const res: AxiosResponse<Charity[]> = await this.get<
        Charity,
        AxiosResponse<Charity[]>
      >(`/${id}/charities`);
      return this.success(res);
    } catch (error) {
      throw error;
    }
  };

  public getProfile = (): Promise<User> => {
    return this.get<User, AxiosResponse<User>>(`/users/profile`)
      .then(this.success)
      .catch(error => {
        throw error;
      });
  };

  public updateUser = (userObject: UpdatingUser): Promise<UpdatedUser> => {
    return this.put<UpdatedUser, UpdatingUser, AxiosResponse<UpdatedUser>>(
      `/users/${userObject.id}`,
      userObject,
    ).then(this.success);
  };

  public logout = () => {
    localStorage.removeItem(authStorageKey);
  };

  public updatePayment = (
    paymentObj: UpdatingBillingInfo,
  ): Promise<UpdatedBillingInfo> => {
    return this.put<
      UpdatedBillingInfo,
      UpdatingBillingInfo,
      AxiosResponse<UpdatedBillingInfo>
    >(`/users/${paymentObj.id}/payment/billing`, paymentObj).then(this.success);
  };
}

export const userApi = new UserApi(apiConfig);
