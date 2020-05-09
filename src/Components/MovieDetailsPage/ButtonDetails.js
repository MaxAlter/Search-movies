import React from "react";

const ButtonDetails = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} type="button">
        Go back
      </button>
    </>
  );
};

export default ButtonDetails;
