import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import { apiConfig } from './api.config';
import { Charity } from 'types/Charity';

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
}

export const charityApi = new CharityApi(apiConfig);
