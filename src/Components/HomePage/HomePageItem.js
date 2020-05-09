import React from "react";
import routes from "../../routes";
import { Link } from "react-router-dom";
import st from "./HomePage.module.css";

const HomePageItem = ({ popular = [] }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {popular.map((item) => (
          <li key={item.id}>
            <Link className={st.item_list} to={`${routes.MOVIES}/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePageItem;
