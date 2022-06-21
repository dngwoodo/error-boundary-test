import axios from 'axios';
import { render, screen } from '../test/utils';
import Main from './Main';
import buildWeather from '../fixture';

const weather = buildWeather();

jest.mock('axios');

type Responses = {
  '/get_environment_data?code=U8ujRlYgXgvxpzhL5BnD7Et5iCMBRUMppCrxcNz-VMziAzFuQ8PgGw==&clientId=default': () => Promise<any>;
  // eslint-disable-next-line no-unused-vars
  default: (url: string) => Promise<string>;
}
// axios 모킹 및 데이터를 받아서 화면에 잘 그려지는지를 테스트
beforeAll(() => {
  const responsesLookup: Responses = {
    '/get_environment_data?code=U8ujRlYgXgvxpzhL5BnD7Et5iCMBRUMppCrxcNz-VMziAzFuQ8PgGw==&clientId=default': async () => ({ data: weather }),
    default: async (url: string) => {
      throw new Error(`Unhandled request: ${url}`);
    },
  };

  (axios.get as jest.Mock).mockImplementation(
    (url: keyof Responses) => (responsesLookup[url] || responsesLookup.default)(url),
  );
});

const context = describe;

describe('Main', () => {
  it('날씨 데이터를 화면에 출력한다.', async () => {
    await render(<Main />);

    expect(screen.getByText(weather.temp_min)).toBeInTheDocument();
    expect(screen.getByText(weather.temp_max)).toBeInTheDocument();
  });

  context('api 통신이 에러가 났을 경우', () => {
    beforeEach(() => {
      jest.spyOn(axios, 'get');

      (axios.get as jest.Mock).mockRejectedValue({
        message: '일시적인 오류가 발생하였습니다.',
      });
    });

    it('error 를 화면에 출력한다.', async () => {
      await render(<Main />);

      expect(screen.getByLabelText('error')).toBeInTheDocument();
    });
  });
});
