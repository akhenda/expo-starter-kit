import type { ApiResponse } from 'apisauce';

import { BaseApi } from '@services/api/base';
import { API_ROUTES, pathToUrl } from '@services/api/routes';

import type { MoviesApiGetResponse, MoviesApiGetResult } from './types';

export class MoviesApi extends BaseApi {
  /**
   * Gets a list of all Stargate movies.
   */
  async get(route: string | undefined) {
    return this.fetcher(
      'get',
      route || pathToUrl(API_ROUTES.movies),
      (response: ApiResponse<MoviesApiGetResponse>): MoviesApiGetResult => {
        const rawData = response.data;

        // This is where we transform the data into the shape we expect for our data store or hooks.
        const movies = (rawData?.search || []).map((raw) => ({
          ...raw,
        }));

        return { kind: 'ok', movies, success: true };
      },
    );
  }
}
