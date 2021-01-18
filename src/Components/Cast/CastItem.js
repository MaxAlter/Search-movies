import React from "react";
import ImageSrc from "../../helpers";
import st from "./castItems.module.css"

const CastItem = ({ cast }) => {
  return (
    <>
      <ul className={st.cast_list}>
        {cast.map((item) => (
          <li key={item.id} >
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
