import React from 'react'

import Part from './Part'

const Content = (props) => {
  return (
    <>
      <Part partName={props.part1.partName} partExcercises={props.part1.exercises} />
      <Part partName={props.part2.partName} partExcercises={props.part2.exercises} />
      <Part partName={props.part3.partName} partExcercises={props.part3.exercises} />
    </>
  )
}

export default Content