// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

export const handlers = [
  rest.get('https://random-data-api.com/api/v2/users', (_, res, ctx) => {
    return res(ctx.json([{ test: true }]));
  }),
];
