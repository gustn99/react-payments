import { css } from '@emotion/react';

export const TYPOGRAPHY = {
  display1: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 25px;
    line-height: 100%;
    text-align: center;
  `,
  title1: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  `,
  caption1: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 9.5px;
    line-height: 11px;
  `,
  body1: css`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  `,
  body2: css`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
  `,
  cardPreview: css`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.16em;
  `,
  button1: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
  `,
  button2: css`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    text-align: center;
  `,
} as const;
