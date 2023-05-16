import { css } from '@emotion/css';

export const statisticsWrapper = css`
  text-align: left;
  margin-top: 24px;
`;
export const statisticsText = css`
  text-align: left;
  margin: 0;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:last-child {
    margin-top: 24px;
    font-size: 18px;
    color: #008000;
  }
`;

export const statisticsGoodText = css`
  color: #008000;
`;
export const statisticsNeutralText = css`
  color: #696969;
`;
export const statisticsBadText = css`
  color: #800000;
`;
