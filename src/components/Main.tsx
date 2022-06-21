import { useQuery } from 'react-query';
import { css } from '@emotion/react';

import mediaQueries from '../styles/mediaQueries';
import loadWeather from '../api';
import HttpClient from '../api/HttpClient';

export default function Main({ httpClient }: { httpClient: HttpClient }) {
  const { data } = useQuery(['weather'], () => loadWeather(httpClient));

  return (
    <main css={styleMain}>
      <p>{data.temp_min}</p>
      <p>{data.temp_max}</p>
    </main>
  );
}

const styleMain = css({
  margin: '0 auto',
  padding: '32px 16px',
  maxWidth: '1200px',
  [mediaQueries.laptop]: {
    padding: '32px',
  },
});

const styleMainTop = css({
  marginBottom: '50px',
  [mediaQueries.tablet]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styleMainBottom = css({
  display: 'grid',
  gap: '20px',
  justifyContent: 'center',
  [mediaQueries.tablet]: {
    '> div:nth-of-type(1)': {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
    },

    '> div:nth-of-type(2)': {
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
    },

    '> div:nth-of-type(3)': {
      gridColumn: '1 / 2',
      gridRow: '2 / 3',
    },

    '> div:nth-of-type(4)': {
      gridColumn: '2 / 3',
      gridRow: '2 / 3',
    },
  },

});
