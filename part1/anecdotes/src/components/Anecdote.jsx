import React from 'react'

const Anecdote = ({anecdote, header}) => {
  return (
    <>
        <h1>{header}</h1>
        <p>{anecdote}</p>
    </>
  )
}

export default Anecdote