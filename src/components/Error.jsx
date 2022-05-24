import { useCallback } from 'react';
import { LoadingWrapper } from './Loading';

export default function Error({ resetErrorBoundary, error }) {
  console.error(error);

  const handleClick = useCallback(() => {
    resetErrorBoundary();
  }, []);

  return (
    <div css={LoadingWrapper}>
      <div>다시 시도해주세요.</div>
      <button type="button" onClick={handleClick}>다시 시도</button>
    </div>
  );
}
