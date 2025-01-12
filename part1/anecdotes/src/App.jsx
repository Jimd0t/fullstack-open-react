import { useState } from 'react'
import Button from './components/Button'
import Anecdote from './components/Anecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  });

  const getRandomAnecdote = () => {
    let oldSelected = selected;
    let newSelected = oldSelected;
    while (newSelected === oldSelected) {
      newSelected = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(newSelected);
  }

  const voteAnecdote = () => {
    const newVotes = {...votes};
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const mostPopularAnecdote = () => {
    let maxIndex = -1;
    let maxVotes = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > maxVotes && votes[i] !== 0) {
        maxIndex = i;
      }
    }
    if (maxIndex === -1) {
      return null;
    }
    return maxIndex;
  }

  return (
    <>
      <Anecdote anecdote={anecdotes[selected]} header="Anecdote of the day"></Anecdote>
      <p>has {votes[selected]} votes</p>
      <Button text="Next Anecdote" onClick={getRandomAnecdote}></Button>
      <Button text="Vote" onClick={voteAnecdote}></Button>
      <Anecdote header="Anecdote with most votes" anecdote={anecdotes[mostPopularAnecdote()]}></Anecdote>
    </>
  )
}

export default App