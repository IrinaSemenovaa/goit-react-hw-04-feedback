import React from 'react';
import { css } from '@emotion/css';

const feedbackMessage = css`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 50px;
`;

export default function NotificationMessage() {
  return <div className={feedbackMessage}>There is no feedback</div>;
}
