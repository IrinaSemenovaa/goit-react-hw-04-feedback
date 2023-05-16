import React from 'react';
import PropTypes from 'prop-types';
import {
  buttonStyles,
  buttonWrapper,
  buttonGoodStyles,
  buttonNeutralStyles,
  buttonBadStyles,
} from './FeedbackStyles';

export default function FeedbackOptions({ handleFeedback }) {
  return (
    <div className={buttonWrapper}>
      <button
        type="button"
        className={`${buttonStyles} ${buttonGoodStyles}`}
        onClick={() => handleFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={`${buttonStyles} ${buttonNeutralStyles}`}
        onClick={() => handleFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={`${buttonStyles} ${buttonBadStyles}`}
        onClick={() => handleFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};
