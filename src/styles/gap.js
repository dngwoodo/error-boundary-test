import { css } from '@emotion/react';

const gap = [2, 4, 6, 8, 10, 12, 14, 16]
  .map((size) => ({
    [`marginRight${size}`]: css({ marginRight: size }),
    [`marginLeft${size}`]: css({ marginLeft: size }),
    [`marginTop${size}`]: css({ marginTop: size }),
    [`marginBottom${size}`]: css({ marginBottom: size }),
  }))
  .reduce((acc, cur) => ({ ...acc, ...cur }));

export default gap;
