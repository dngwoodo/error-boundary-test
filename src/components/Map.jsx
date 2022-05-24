import { css } from '@emotion/react';

export default function Map() {
  return (
    <div css={styleMapWrapper}>
      <figure css={styleMapImageWrapper}>
        <img src="/src/assets/yeongdo4.png" alt="yeongdo-map" css={styleMapImage} />
      </figure>
    </div>
  );
}

const styleMapWrapper = css({
  display: 'flex',
  justifyContent: 'center',
});

const styleMapImageWrapper = css({
  width: '300px',
});

const styleMapImage = css({
  width: '100%',
  objectFit: 'cover',
});
