import axios, { AxiosRequestConfig, Method } from 'axios';
import HttpClient from './HttpClient';

class AxiosHttpClient implements HttpClient {
  private readonly _config: AxiosRequestConfig;

  constructor() {
    this._config = {
      method: 'GET',
      withCredentials: true,
    };
  }

  create(baseURL?: string, url?: string) {
    this._config.baseURL = baseURL;
    this._config.url = url;

    return this;
  }

  get(): this {
    return this.setMethod('get');
  }

  post(): this {
    return this.setMethod('post');
  }

  put(): this {
    return this.setMethod('put');
  }

  patch(): this {
    return this.setMethod('patch');
  }

  delete(): this {
    return this.setMethod('delete');
  }

  async retrieve(): Promise<any> {
    const response = await axios(this._config);

    return response.data;
  }

  private setMethod(method: Method): this {
    this._config.method = method;

    return this;
  }
}

export default AxiosHttpClient;
