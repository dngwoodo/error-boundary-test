import axios from 'axios';

export default async function loadWeather() {
  const response = await axios.get('http://localhost:3000/api/weather');

  return response.data;
}
