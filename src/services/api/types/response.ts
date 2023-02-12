import type { GeneralApiError } from './error';

export type ApiGetResult<T> =
  | ({
      kind: 'ok';
      success: boolean;
    } & {
      [Property in keyof T]: T[Property];
    })
  | GeneralApiError;
