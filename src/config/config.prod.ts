/**
 * These are configuration settings for the production environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
export default {
  API_KEY: process.env.API_KEY,
  API_URL: 'https://www.omdbapi.com/',
} as const;
