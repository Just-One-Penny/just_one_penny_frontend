import { NewsFeed } from 'types/newsFeed';
/* --- STATE --- */
export interface NewsFeedState {
  articles: [];
  loading: boolean;
  error?: number | null;
}

export interface NewsFeedSuccess {
  newsFeed: NewsFeed;
}

export enum NewsFeedErrorType {
  NO_FEED = 1,
  OTHERS = 2,
}
export type ContainerState = NewsFeedState;
