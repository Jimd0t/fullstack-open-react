import React from 'react'
import Header from './Header'

const FeedbackSurvey = ({functions}) => {
  return (
    <>
        <Header text="give feedback"/>
        <button onClick={functions.handleGoodFeedback}>good</button>
        <button onClick={functions.handleNeutralFeedback}>neutral</button>
        <button onClick={functions.handleBadFeedback}>bad</button>
    </>
  )
}

export default FeedbackSurvey