import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import NotificationMessage from './NotificationMessage/NotificationMessage';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    if (type === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (type === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (type === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const handleTotalFeedback = () => {
    return good + neutral + bad; 
  };

  const handlePositivePercentage = ({ good }) => {
    return Math.round((good / handleTotalFeedback()) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions handleFeedback={handleFeedback} />
      </Section>
      {handleTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={handleTotalFeedback()}
            positivePercentage={handlePositivePercentage({ good })}
          />
        </Section>
      ) : (
        <NotificationMessage />
      )}
    </div>
  );
}
