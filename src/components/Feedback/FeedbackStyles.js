import { css } from '@emotion/css';

export const buttonStyles = css`
  background-color: #ffffff;
  border-radius: 5px;
  color: #222222;
  font-size: 16px;
  font-weight: bold;
  width: 80px;
  height: 40px;
  cursor: pointer;
`;

export const buttonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 24px;
`;

export const buttonGoodStyles = css`
  border: 2px solid #008000;
  transition: all 0.3s ease;
  &:hover {
    background-color: #008000;
    color: #ffffff;
  }
`;
export const buttonNeutralStyles = css`
  border: 2px solid #696969;
  transition: all 0.3s ease;
  &:hover {
    background-color: #696969;
    color: #ffffff;
  }
`;
export const buttonBadStyles = css`
  border: 2px solid #800000;
  transition: all 0.3s ease;
  &:hover {
    background-color: #800000;
    color: #ffffff;
  }
`;
