import React from 'react'
import FeedbackStatistics from './FeedbackStatistics'
import FeedbackSurvey from './FeedbackSurvey'

const Survey = ({ functions, good, neutral, bad }) => {
  return (
    <>
    <FeedbackSurvey functions={functions} />
    <FeedbackStatistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default Survey