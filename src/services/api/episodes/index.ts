import type { ApiResponse } from 'apisauce';

import { BaseApi } from '@services/api/base';
import type { FeedApiResponse } from '@services/api/feed/types';

import type { EpisodeApiGetResult } from './types';

export class EpisodesApi extends BaseApi {
  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async get() {
    return this.fetcher(
      'get',
      'api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx',
      (response: ApiResponse<FeedApiResponse>): EpisodeApiGetResult => {
        const rawData = response.data;

        // This is where we transform the data into the shape we expect for our MST model.
        const episodes = (rawData?.items || []).map((raw) => ({
          ...raw,
        }));

        return { episodes, kind: 'ok', success: true };
      },
    );
  }
}
