import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api } from './api';
import { NewsFeed } from 'types/newsFeed';
import { apiConfig } from './api.config';

export class FeedApi extends Api {
  public constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public getFeed = async (keywords: string[]): Promise<NewsFeed> => {
    try {
      console.log("FeedApi -> keywords.join(',')", keywords.join(','));
      const res: AxiosResponse<NewsFeed> = await this.get<
        NewsFeed,
        AxiosResponse<NewsFeed>
      >('/feed', { params: { keywords: keywords.join(',') } });

      return this.success(res);
    } catch (err) {
      throw err;
    }
  };
}

export const feedApi = new FeedApi(apiConfig());
