import type { ApiErrorResponse } from 'apisauce';

import { getGeneralApiError } from './error';

describe('API Errors Test Suite', () => {
  test('handles connection errors', () => {
    expect(getGeneralApiError({ problem: 'CONNECTION_ERROR' } as ApiErrorResponse<null>)).toEqual({
      kind: 'cannot-connect',
      success: false,
      temporary: true,
    });
  });

  test('handles network errors', () => {
    expect(getGeneralApiError({ problem: 'NETWORK_ERROR' } as ApiErrorResponse<null>)).toEqual({
      kind: 'cannot-connect',
      success: false,
      temporary: true,
    });
  });

  test('handles timeouts', () => {
    expect(getGeneralApiError({ problem: 'TIMEOUT_ERROR' } as ApiErrorResponse<null>)).toEqual({
      kind: 'timeout',
      success: false,
      temporary: true,
    });
  });

  test('handles server errors', () => {
    expect(getGeneralApiError({ problem: 'SERVER_ERROR' } as ApiErrorResponse<null>)).toEqual({
      kind: 'server',
      success: false,
    });
  });

  test('handles unknown errors', () => {
    expect(getGeneralApiError({ problem: 'UNKNOWN_ERROR' } as ApiErrorResponse<null>)).toEqual({
      kind: 'unknown',
      success: false,
      temporary: true,
    });
  });

  test('handles unauthorized errors', () => {
    expect(getGeneralApiError({ problem: 'CLIENT_ERROR', status: 401 } as ApiErrorResponse<null>)).toEqual({
      kind: 'unauthorized',
      success: false,
    });
  });

  test('handles forbidden errors', () => {
    expect(getGeneralApiError({ problem: 'CLIENT_ERROR', status: 403 } as ApiErrorResponse<null>)).toEqual({
      kind: 'forbidden',
      success: false,
    });
  });

  test('handles not-found errors', () => {
    expect(getGeneralApiError({ problem: 'CLIENT_ERROR', status: 404 } as ApiErrorResponse<null>)).toEqual({
      kind: 'not-found',
      success: false,
    });
  });

  test('handles other client errors', () => {
    expect(getGeneralApiError({ problem: 'CLIENT_ERROR', status: 418 } as ApiErrorResponse<null>)).toEqual({
      kind: 'rejected',
      success: false,
    });
  });

  test('handles cancellation errors', () => {
    expect(getGeneralApiError({ problem: 'CANCEL_ERROR' } as ApiErrorResponse<null>)).toBeNull();
  });
});
