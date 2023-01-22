/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 */
import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import isError from 'lodash/isError';

import Config from '@src/config';

import { GeneralApiError, getGeneralApiError } from './error';
import type { ApiConfig, ApiFeedResponse, EpisodeItem } from './types';

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  timeout: 10000,
  url: Config.API_URL,
};

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance;

  config: ApiConfig;

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apisauce = create({
      baseURL: this.config.url,
      headers: {
        Accept: 'application/json',
      },
      timeout: this.config.timeout,
    });
  }

  // @demo remove-block-start
  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async getEpisodes(): Promise<{ kind: 'ok'; episodes: EpisodeItem[] } | GeneralApiError> {
    // make the api call
    const response: ApiResponse<ApiFeedResponse> = await this.apisauce.get(
      `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`,
    );

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiError(response);
      if (problem) return problem;
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data;

      // This is where we transform the data into the shape we expect for our MST model.
      const episodes = (rawData?.items || []).map((raw) => ({
        ...raw,
      }));

      return { episodes, kind: 'ok' };
    } catch (error) {
      if (__DEV__ && isError(error)) {
        // eslint-disable-next-line no-console
        console.tron.error?.(`Bad data: ${error.message}\n${response.data}`, error.stack);
      }

      return { kind: 'bad-data' };
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api();
