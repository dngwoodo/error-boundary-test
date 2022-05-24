import { rest } from 'msw';
import WEATHER from '../fixture';

let error = true;

const handlers = [
  rest.get('/api/weather', (req, res, ctx) => {
    if (error) {
      console.log({ error });
      error = false;
      return res(
        ctx.status(500),
        ctx.delay(2000),
      );
    }

    console.log({ error });
    error = true;
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json(WEATHER),
    );
  }),
];

export default handlers;
