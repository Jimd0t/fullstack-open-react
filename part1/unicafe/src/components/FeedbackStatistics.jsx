import React from 'react'
import StatisticsLine from './StatisticsLine';
import Header from './Header';

const FeedbackStatistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad;
  const average = (good - bad) / total;

  const positive = (good / total) * 100;
  if (total === 0) {
    return (
      <>
        <Header text="statistics"/>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <Header text="statistics"/>
      <table>
      <tbody>
        <StatisticsLine text="Good" value={good}/>
        <StatisticsLine text="Neutral" value={neutral}/>
        <StatisticsLine text="Bad" value={bad}/>
        <StatisticsLine text="Total" value={total}/>
        <StatisticsLine text="Average" value={average}/>
        <StatisticsLine text="Positive" value={positive}/>
      </tbody>
      </table>
    </>
  )
}

export default FeedbackStatistics