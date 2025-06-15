import React from 'react'

const Total = (props) => {
  let excerciseCount = 0;

  console.log(props.parts);
  

  for (let i = 0; i < props.parts.length; i++) {
    excerciseCount += props.parts[i].exercises;
  }
  console.log(excerciseCount);
  return (
    <p>Number of excercises: {excerciseCount}</p>
  )
}

export default Total