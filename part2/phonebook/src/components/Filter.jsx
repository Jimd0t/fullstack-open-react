import React from "react";

const Filter = ({ onChange }) => {
  return (
    <p>
      Filter shown with: <input onChange={onChange} />
    </p>
  );
};

export default Filter;
