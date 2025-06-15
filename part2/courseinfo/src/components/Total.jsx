import React from "react";

const Total = ({ parts }) => {
  let excerciseCount = parts.reduce(
    (total, current) => total + current.exercises,
    0
  );

  console.log("Parts Total: ", excerciseCount);

  // for (let i = 0; i < parts.length; i++) {
  //   excerciseCount += parts[i].exercises;
  // }

  return (
    <p>
      <strong>Number of excercises: {excerciseCount}</strong>
    </p>
  );
};

export default Total;
