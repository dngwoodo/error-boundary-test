import { rest } from 'msw';
import buildWeather from '../fixture';

let error = false;

const apiFor = (params) => `http://localhost:3000/api${params}`;

const handlers = [
  rest.get(apiFor('/get_environment_data'), (req, res, ctx) => {
    if (error) {
      error = false;
      return res(
        ctx.status(500),
        ctx.delay(2000),
      );
    }

    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json(buildWeather()),
    );
  }),
];

export default handlers;
