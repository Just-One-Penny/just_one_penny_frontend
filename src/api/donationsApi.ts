import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
// import { Credentials, Token, User } from 'types/User';
import { apiConfig } from './api.config';

export const authStorageKey = 'jop_auth_token';

export class DonationsApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public submitDonation = (): Promise<number> => {
    return this.post<number, AxiosResponse<string>>('/donations')
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        throw error;
      });
  };
}

export const donationsApi = new DonationsApi(apiConfig);
