import { faker } from '@faker-js/faker';

import getRandomWordFor from '../util';

const WEATHER = {
  temperature: faker.datatype.number({ min: 0, max: 100 }),
  humidity: faker.datatype.number({ min: 0, max: 100 }),
  wind_speed: faker.datatype.number({ min: 0, max: 100 }),
  wind_deg_status: getRandomWordFor(['북', '북동', '동', '남동', '남', '남서', '서', '북서']),
  weather: getRandomWordFor(['clear', 'rain', 'snow', 'cloudy']),
  temp_min: faker.datatype.number({ min: 0, max: 50 }),
  temp_max: faker.datatype.number({ min: 51, max: 100 }),
  fine_dust: faker.datatype.number({ min: 0, max: 100 }),
  fine_dust_status: getRandomWordFor(['normal', 'warn', 'danger', 'serious']),
  ultra_find_dust: faker.datatype.number({ min: 0, max: 100 }),
};

export default WEATHER;
