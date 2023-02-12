/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 */
import { ApisauceInstance, create, Monitor } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

import Config from '@src/config';
import { Reactotron } from '@src/config/libs/reactotron/client';

import type { ApiConfig } from './types/config';
import { EpisodesApi } from './episodes';

const snakecaseSerializer = new SnakecaseSerializer();
const camelcaseSerializer = new CamelcaseSerializer();

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

  private config: ApiConfig;

  episodes: EpisodesApi;

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apisauce = create({
      baseURL: this.config.url,
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en',
        'Content-Type': 'application/json',
      },
      timeout: this.config.timeout,
    });

    if (__DEV__) this.addMonitors();
    this.setAuthorizationHeader();
    this.addRequestTransforms();
    this.addResponseTransforms();

    this.episodes = new EpisodesApi(this.apisauce);
  }

  /**
   * Attach a monitor that fires with each request
   */
  private addMonitors() {
    this.apisauce.addMonitor((Reactotron as unknown as typeof Reactotron & { apisauce: Monitor }).apisauce);
    this.apisauce.addMonitor((response) => {
      if (response.ok) {
        // eslint-disable-next-line no-console
        console.log(
          `%c API_RESPONSE! %c${response.config?.url}`,
          'background: #222; color: #bada55; font-size:16px',
          'background:red;color:white;',
        );
      } else {
        // eslint-disable-next-line no-console
        console.log(
          `%c API_RESPONSE! %c${response.config?.url}`,
          'background: #222; color: #ff7788; font-size:16px',
          'background:red;color:white;',
        );
      }

      // eslint-disable-next-line no-console
      console.log(response.data);
    });
  }

  private setAuthorizationHeader() {
    this.apisauce.setHeader('Authorization', 'Bearer token');
  }

  private addRequestTransforms() {
    this.apisauce.addRequestTransform((request) => {
      if (request.data) request.data = snakecaseSerializer.serialize(request.data);
      if (request.params) request.params = snakecaseSerializer.serialize(request.params);
    });
  }

  private addResponseTransforms() {
    this.apisauce.addResponseTransform((response) => {
      if (response.ok) {
        response.data = camelcaseSerializer.serialize(response.data);
      } else {
        throw { data: response.data, problem: response.problem, status: response.status } as unknown as Error;
      }
    });
  }
}

// Singleton instance of the API for convenience
export const api = new Api();
