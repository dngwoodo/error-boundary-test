import { useMemo } from 'react';
import { css } from '@emotion/react';
import { styleCard, styleCardContent, styleCardTitle } from '../styles/card';

export default function WindDirection({ windDegreeStatus }) {
  const windDirectionImage = useMemo(() => (
    {
      북: '/src/assets/windDirection/01_n.png',
      북동: '/src/assets/windDirection/02_ne.png',
      동: '/src/assets/windDirection/03_e.png',
      남동: '/src/assets/windDirection/04_se.png',
      남: '/src/assets/windDirection/05_s.png',
      남서: '/src/assets/windDirection/06_sw.png',
      서: '/src/assets/windDirection/07_w.png',
      북서: '/src/assets/windDirection/08_nw.png',
    }
  ), []);

  return (
    <div css={[styleCard, styleWindDirection]}>
      <h4 css={styleCardTitle}>풍향</h4>
      <div css={styleWindDirectionBody}>
        <figure css={styleWindDirectionImageWrapper}>
          <img src={windDirectionImage[windDegreeStatus]} alt="wind-direction" css={styleWindDirectionImage} />
        </figure>
      </div>
      <p css={[styleCardTitle, styleCardContent]}>
        {windDegreeStatus}
        향
      </p>
    </div>
  );
}

export const styleWindDirection = css({
  background: '#41d5cc',
});

const styleWindDirectionBody = css({
  display: 'flex',
  justifyContent: 'center',
});

const styleWindDirectionImageWrapper = css({
  width: '80px',
  height: '80px',
});

const styleWindDirectionImage = css({
  width: '100%',
  objectFit: 'cover',
});
