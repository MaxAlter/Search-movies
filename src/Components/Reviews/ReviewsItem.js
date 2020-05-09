import React from "react";

const ReviewsItem = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsItem;
