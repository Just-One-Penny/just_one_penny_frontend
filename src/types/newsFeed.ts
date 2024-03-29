export interface NewsFeed {
  articles: Article[];
}

export interface Article {
  source: object;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
