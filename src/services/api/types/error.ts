export type GeneralApiError =
  /**
   * Times up.
   */
  | { kind: 'timeout'; temporary: true; success: false }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: 'cannot-connect'; temporary: true; success: false }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: 'server'; success: false }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: 'unauthorized'; success: false }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: 'forbidden'; success: false }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: 'not-found'; success: false }
  /**
   * All other 4xx series errors.
   */
  | { kind: 'rejected'; success: false }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: 'unknown'; temporary: true; success: false }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: 'bad-data'; success: false };
