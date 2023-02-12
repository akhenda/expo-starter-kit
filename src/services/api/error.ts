import type { ApiResponse } from 'apisauce';

import type { GeneralApiError } from './types/error';

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiError(response: ApiResponse<unknown>): GeneralApiError | null {
  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return { kind: 'cannot-connect', success: false, temporary: true };
    case 'NETWORK_ERROR':
      return { kind: 'cannot-connect', success: false, temporary: true };
    case 'TIMEOUT_ERROR':
      return { kind: 'timeout', success: false, temporary: true };
    case 'SERVER_ERROR':
      return { kind: 'server', success: false };
    case 'UNKNOWN_ERROR':
      return { kind: 'unknown', success: false, temporary: true };
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 401:
          return { kind: 'unauthorized', success: false };
        case 403:
          return { kind: 'forbidden', success: false };
        case 404:
          return { kind: 'not-found', success: false };
        default:
          return { kind: 'rejected', success: false };
      }
    case 'CANCEL_ERROR':
    default:
      return null;
  }
}
