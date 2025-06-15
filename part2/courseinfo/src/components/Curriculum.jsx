import React from "react";
import Course from "./Course";

const Curriculum = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </>
  );
};

export default Curriculum;
