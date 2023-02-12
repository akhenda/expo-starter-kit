import type { ApiResponse, ApisauceInstance } from 'apisauce';
import isError from 'lodash/isError';

import type { GeneralApiError } from './types/error';
import type { ApiGetResult } from './types/response';
import { getGeneralApiError } from './error';

export abstract class BaseApi {
  private api: ApisauceInstance;

  constructor(client: ApisauceInstance) {
    this.api = client;
  }

  async fetcher<Result extends ApiGetResult<Record<string, unknown>>, GetResponse = unknown>(
    method: 'get' | 'post',
    route: string,
    callback: (response: ApiResponse<GetResponse>) => Result,
  ) {
    // make the api call
    const response = (await this.api[method](route)) as ApiResponse<GetResponse>;

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiError(response);

      if (problem) return problem;
    }

    // transform the data into the format we are expecting
    try {
      return callback(response);
    } catch (error) {
      if (__DEV__ && isError(error)) {
        // eslint-disable-next-line no-console
        console.tron.error?.(`Bad data: ${error.message}\n${response.data}`, error.stack);
      }

      return { kind: 'bad-data' } as GeneralApiError;
    }
  }

  // async get<Result extends ApiGetResult<Record<string, unknown>>, GetResponse = unknown>(
  //   route: string,
  //   callback: (response: ApiResponse<GetResponse>) => Result,
  // ) {
  //   return this.fetcher('get', route, callback);
  // }
}
