import { css } from '@emotion/react';
import { styleCard, styleCardContent, styleCardTitle } from '../styles/card';

export default function Humidity({ humidity }) {
  return (
    <div css={styleCard}>
      <h4 css={styleCardTitle}>습도</h4>
      <ul css={styleHumidityImages}>
        {
            Array(3).fill(0).map((_, index) => (
              <li key={index}>
                <figure css={styleHumidityImageWrapper}>
                  <img src="/src/assets/waterDrop.png" alt="water-drop" css={styleHumidityImage} />
                </figure>
              </li>
            ))
          }
      </ul>
      <p css={[styleCardTitle, styleCardContent]}>
        {humidity}
        %
      </p>
    </div>
  );
}

const styleHumidityImages = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const styleHumidityImageWrapper = css({
  width: '40px',
  height: '40px',
});

const styleHumidityImage = css({
  width: '100%',
  objectFit: 'cover',
});
