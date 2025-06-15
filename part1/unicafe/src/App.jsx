import { useState } from 'react'
import Survey from './components/Survey'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const functions = {
    handleGoodFeedback: () => {
      console.log('good');      
      setGood(good + 1)},
    handleNeutralFeedback: () => setNeutral(neutral + 1),
    handleBadFeedback: () => setBad(bad + 1)
  }

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    functions: functions
  }

  return (
    <>
      <Survey {...statistics} />
    </>
  )
}

export default App