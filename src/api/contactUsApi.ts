import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import { apiConfig } from './api.config';
import { Email } from 'types/Email';

export class ContactUsApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public postEmail = async (email: Email): Promise<string> => {
    try {
      const res: AxiosResponse<string> = await this.post<
        string,
        Email,
        AxiosResponse<string>
      >('/email/contact-us', email);

      return this.success(res);
    } catch (error) {
      throw error;
    }
  };
}

export const contactUsApi = new ContactUsApi(apiConfig());
