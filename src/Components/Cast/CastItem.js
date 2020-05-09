import React from "react";
import ImageSrc from "../../helpers";

const CastItem = ({ cast }) => {
  return (
    <>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={ImageSrc(item.profile_path)}
              alt={item.name}
              width="120"
              height="150"
            />
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CastItem;
