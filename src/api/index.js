import axios from 'axios';
import appConfig from '../appConfig';

function createInstance() {
  return axios.create({
    baseURL: appConfig.VITE_API_URL,
    withCredentials: true,
  });
}

const instance = createInstance();

export default async function loadWeather() {
  const response = await instance.get('/get_environment_data?code=U8ujRlYgXgvxpzhL5BnD7Et5iCMBRUMppCrxcNz-VMziAzFuQ8PgGw==&clientId=default');

  return response.data;
}
