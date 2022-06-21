import appConfig from '../appConfig';
import HttpClient from './HttpClient';

export default async function loadWeather(httpClient: HttpClient) {
  const response = await httpClient
    .create(appConfig.VITE_API_URL, '/get_environment_data?code=U8ujRlYgXgvxpzhL5BnD7Et5iCMBRUMppCrxcNz-VMziAzFuQ8PgGw==&clientId=default')
    .get()
    .retrieve();

  return response.data;
}
