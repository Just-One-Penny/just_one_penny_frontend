import { Article } from 'types/newsFeed';
/* --- STATE --- */
export interface NewsFeedState {
  articles: Article[];
  loading: boolean;
  error?: number | null;
}

export interface NewsFeedSuccess {
  articles: Article[];
}

export enum NewsFeedErrorType {
  NO_FEED = 1,
  OTHERS = 2,
}
export type ContainerState = NewsFeedState;
