interface HttpClient {
  // eslint-disable-next-line no-unused-vars
  create(baseURL?: string, url?: string): this;

  get(): this;

  post(): this;

  put(): this;

  patch(): this;

  delete(): this;

  retrieve(): Promise<any>;
}

export default HttpClient;
