import { css } from '@emotion/react';
import Map from './Map';

export default function Loading() {
  return (
    <div css={LoadingWrapper}>
      <Map />
    </div>
  );
}

export const LoadingWrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 60px)',
});
