import { css } from '@emotion/react';;

export default function Header() {
  return (
    <header css={styleHeader}>
      <figure css={styleHeaderImageWrapper}>
        <img src="/src/assets/header/title.png" alt="title" css={styleHeaderImage} />
      </figure>
    </header>
  );
}

const styleHeader = css({
  height: '60px',
  borderBottom: '3px solid #069c99',
});

const styleHeaderImageWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const styleHeaderImage = css({
  width: '200px',
});
