import { useMemo } from 'react';
import { css } from '@emotion/react';
import { styleCard, styleCardContent, styleCardTitle } from '../styles/card';

export default function FineDust({ fineDustStatus, fineDust }) {
  const fineDustInfo = useMemo(() => ({
    normal: {
      image: '/src/assets/mask/mask3.png',
      content: '날씨가 너무 좋네요! 외출을 권해드려요 :)',
    },
    warn: {
      image: '/src/assets/mask/mask1.png',
      content: '마스크를 착용하면 좋을 것 같아요!',
    },
    danger: {
      image: '/src/assets/mask/mask1.png',
      content: '꼭 마스크를 쓰고 외출하세요!',
    },
    serious: {
      image: '/src/assets/mask/mask2.png',
      content: '나가지 마세요!',
    },
  }), []);

  return (
    <div css={styleCard}>
      <h4 css={styleCardTitle}>미세먼지</h4>
      <div css={styleFindDustBody}>
        <figure css={styleFineDustImageWrapper}>
          <img src={fineDustInfo[fineDustStatus].image} alt="water-icon" css={styleFineDustImage} />
        </figure>
        <span css={[styleCardTitle, styleFineDustNumber]}>{fineDust}</span>
      </div>
      <p css={[styleCardTitle, styleCardContent]}>{fineDustInfo[fineDustStatus].content}</p>
    </div>
  );
}

const styleFindDustBody = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
});

const styleFineDustImageWrapper = css({
  width: '45px',
  height: '45px',
});

const styleFineDustImage = css({
  width: '100%',
  objectFit: 'cover',
});

const styleFineDustNumber = css({
  fontSize: '50px',
  marginBottom: '-12px',
});
