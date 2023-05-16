import React from 'react';
import PropTypes from 'prop-types';
import {
  statisticsWrapper,
  statisticsText,
  statisticsGoodText,
  statisticsNeutralText,
  statisticsBadText,
} from './StatisticsStyles';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={statisticsWrapper}>
      <p className={`${statisticsText} ${statisticsGoodText}`}>Good: {good}</p>
      <p className={`${statisticsText} ${statisticsNeutralText}`}>
        Neutral: {neutral}
      </p>
      <p className={`${statisticsText} ${statisticsBadText}`}>Bad: {bad}</p>
      <p className={statisticsText}>Total: {total}</p>
      <p className={statisticsText}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
