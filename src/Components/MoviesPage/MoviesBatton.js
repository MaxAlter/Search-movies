import React from "react";

const MoviesBatton = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button">
        Go back
      </button>
    </>
  );
};

export default MoviesBatton;
