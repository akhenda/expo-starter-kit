import type { ApiResponse } from 'apisauce';

import { BaseApi } from '@services/api/base';
import { API_ROUTES, pathToUrl } from '@services/api/routes';

import type { SeriesApiGetResponse, SeriesApiGetResult } from './types';

export class SeriesApi extends BaseApi {
  /**
   * Gets a list of all Stargate series.
   */
  async get(route: string | undefined) {
    return this.fetcher(
      'get',
      route || pathToUrl(API_ROUTES.series),
      (response: ApiResponse<SeriesApiGetResponse>): SeriesApiGetResult => {
        const rawData = response.data;

        // This is where we transform the data into the shape we expect for our data store or hooks.
        const series = (rawData?.search || []).map((raw) => ({
          ...raw,
        }));

        return { kind: 'ok', series, success: true };
      },
    );
  }
}
