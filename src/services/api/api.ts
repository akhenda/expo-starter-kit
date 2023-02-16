/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 */
import perf, { FirebasePerformanceTypes } from '@react-native-firebase/perf';
import { ApisauceInstance, create, Monitor } from 'apisauce';
import type { AxiosRequestConfig } from 'axios';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

import Config from '@src/config';
import { Reactotron } from '@src/services/reactotron/client';

import type { ApiConfig } from './types/config';
import { MoviesApi } from './movies';
import { SeriesApi } from './series';

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

  movies: MoviesApi;

  series: SeriesApi;

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
    this.injectAPIKey();
    this.setAuthorizationHeader();
    this.addRequestTransforms();
    this.addResponseTransforms();
    this.addFirebasePerformanceMonitoring();

    this.movies = new MoviesApi(this.apisauce);
    this.series = new SeriesApi(this.apisauce);
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

  private injectAPIKey() {
    // this.apisauce.axiosInstance.defaults.params = {};
    this.apisauce.axiosInstance.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.params.apikey = Config.API_KEY;

      return config;
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

  private addFirebasePerformanceMonitoring() {
    this.apisauce.axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig & { metadata?: { httpMetric: FirebasePerformanceTypes.HttpMetric } }) => {
        try {
          const httpMetric = perf().newHttpMetric(
            config.url || '',
            config.method as FirebasePerformanceTypes.HttpMethod,
          );

          // eslint-disable-next-line no-param-reassign
          config.metadata = { httpMetric };

          // add any extra metric attributes, if required
          // httpMetric.putAttribute('userId', '12345678');

          await httpMetric.start();
        } catch {
          // catch error
        }

        return config;
      },
    );

    this.apisauce.axiosInstance.interceptors.response.use(
      async (response) => {
        try {
          // Request was successful, e.g. HTTP code 200
          const { httpMetric } = (
            response.config as AxiosRequestConfig & { metadata: { httpMetric: FirebasePerformanceTypes.HttpMetric } }
          ).metadata;

          // add any extra metric attributes if needed
          // httpMetric.putAttribute('userId', '12345678');

          httpMetric.setHttpResponseCode(response.status);
          httpMetric.setResponseContentType(response.headers['content-type']);
          await httpMetric.stop();
        } catch {
          // catch error
        }

        return response;
      },
      async (error) => {
        try {
          // Request failed, e.g. HTTP code 500
          const { httpMetric } = error.config.metadata;

          // add any extra metric attributes if needed
          // httpMetric.putAttribute('userId', '12345678');

          httpMetric.setHttpResponseCode(error.response.status);
          httpMetric.setResponseContentType(error.response.headers['content-type']);
          await httpMetric.stop();
        } catch {
          // catch error
        }

        // Ensure failed requests throw after interception
        return Promise.reject(error);
      },
    );
  }
}

// Singleton instance of the API for convenience
export const api = new Api();
