import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import { DonationSubmitted } from 'types/Donation';
import { apiConfig } from './api.config';

export const authStorageKey = 'jop_auth_token';

export class DonationApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public submitDonation = (donation: DonationSubmitted): Promise<number> => {
    return this.post<number, DonationSubmitted, AxiosResponse<number>>(
      '/donations',
      donation,
    )
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        throw error;
      });
  };
}

export const donationApi = new DonationApi(apiConfig);
