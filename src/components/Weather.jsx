import { useMemo } from 'react';
import { css } from '@emotion/react';
import gap from '../styles/gap';

export default function Weather({ weather }) {
  const {
    temperature,
    weather: weatherStatus,
    temp_min,
    temp_max,
  } = weather;

  const weatherImage = useMemo(() => (
    {
      clear: '/src/assets/weatherIcon/sun.png',
      cloudy: '/src/assets/weatherIcon/cloud.png',
      rain: '/src/assets/weatherIcon/rainDrop.png',
      snow: '/src/assets/weatherIcon/snow.png',
    }
  ), []);

  return (
    <div css={styleWeatherContainer}>
      <div css={styleWeatherTitleContainer}>
        <span css={styleWeatherTitle}>현재 날씨</span>
        <figure css={styleWeatherImageWrapper}>
          <img src={weatherImage[weatherStatus]} alt="weather" css={styleWeatherImage} />
        </figure>
      </div>
      <p css={[styleWeatherCurrentTemperature, gap.marginTop8, gap.marginBottom8]}>
        {temperature}
        °
      </p>
      <p css={[styleWeatherTemperature, gap.marginBottom6]}>
        최저:
        {temp_min}
        °
      </p>
      <p css={styleWeatherTemperature}>
        최고:
        {temp_max}
        °
      </p>
    </div>
  );
}

const styleWeatherContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const styleWeatherTitleContainer = css({
  display: 'flex',
});

const styleWeatherTitle = css({
  flexShrink: 0,
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#707070',
  marginRight: '6px',
});

const styleWeatherImageWrapper = css({
  width: '20px',
  height: '20px',
});

const styleWeatherImage = css({
  width: '100%',
  objectFit: 'cover',
});

const styleWeatherCurrentTemperature = css({
  fontSize: '50px',
  fontWeight: 'bold',
  color: '#505050',
});

const styleWeatherTemperature = css({
  fontWeight: 'bold',
  letterSpacing: '0.8px',
  color: '#707070',
});
