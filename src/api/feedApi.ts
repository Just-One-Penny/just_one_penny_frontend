import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import { NewsFeed } from 'types/newsFeed';
import { apiConfig } from './api.config';

export class FeedApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public getFeed = async (): Promise<NewsFeed> => {
    try {
      const res: AxiosResponse<NewsFeed> = await this.get<
        NewsFeed,
        AxiosResponse<NewsFeed>
      >('/feed');

      return this.success(res);
    } catch (err) {
      throw err;
    }
  };
}

export const feedApi = new FeedApi(apiConfig);
