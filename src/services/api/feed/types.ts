import type { EpisodeItem } from '@services/api/episodes/types';

export interface FeedApiResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: EpisodeItem[];
}
