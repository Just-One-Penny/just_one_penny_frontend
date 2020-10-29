import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import { apiConfig } from './api.config';
import { Charity, StripeCode } from 'types/Charity';

export class CharityApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public getCharities = async (): Promise<Charity[]> => {
    try {
      const res: AxiosResponse<Charity[]> = await this.get<
        Charity,
        AxiosResponse<Charity[]>
      >('/charities');

      return this.success(res);
    } catch (error) {
      throw error;
    }
  };

  public getCharityById = (id: string): Promise<Charity> => {
    return this.get<Charity, AxiosResponse<Charity>>(`/charities/${id}`).then(
      this.success,
    );
  };

  public connectCharityStripe = async (
    code: string,
    email: string,
  ): Promise<string> => {
    try {
      const res: AxiosResponse<string> = await this.put<
        string,
        StripeCode,
        AxiosResponse<string>
      >('/charities/stripe', {
        code,
        email,
      });

      return this.success(res);
    } catch (error) {
      throw error;
    }
  };
}

export const charityApi = new CharityApi(apiConfig);
