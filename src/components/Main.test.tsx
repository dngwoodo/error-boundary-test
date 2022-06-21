import { render, screen } from '../test/utils';
import Main from './Main';
import buildWeather from '../fixture';
import HttpClient from '../api/HttpClient';

const weather = buildWeather();

const context = describe;

class StubHttpClient implements HttpClient {
  baseURL?: string;

  url?: string;

  data: any;

  constructor(data: any) {
    this.data = data;
  }

  create(baseURL?: string, url?: string) {
    this.baseURL = baseURL;
    this.url = url;

    return this;
  }

  get() {
    return this;
  }

  post() {
    return this;
  }

  put() {
    return this;
  }

  patch() {
    return this;
  }

  delete() {
    return this;
  }

  async retrieve(): Promise<any> {
    return {
      data: this.data,
    };
  }
}

describe('Main', () => {
  it('날씨 데이터를 화면에 출력한다.', async () => {
    await render(<Main httpClient={new StubHttpClient(weather)} />);

    expect(screen.getByText(weather.temp_min)).toBeInTheDocument();
    expect(screen.getByText(weather.temp_max)).toBeInTheDocument();
  });

  context('api 통신이 에러가 났을 경우', () => {
    it('error 를 화면에 출력한다.', async () => {
      await render(<Main httpClient={new StubHttpClient(Promise.reject(new Error('')))} />);

      expect(screen.getByLabelText('error')).toBeInTheDocument();
    });
  });
});
