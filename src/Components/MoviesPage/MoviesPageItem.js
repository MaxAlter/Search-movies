import React from "react";
import { Link, withRouter } from "react-router-dom";
import routes from "../../routes";

const MoviesPageItem = ({ searchFilms, location }) => {
  const { search, pathname } = location;
  const generateMoviLink = (id) => {
    return {
      pathname: `${routes.MOVIES}/${id}`,
      state: {
        from: pathname + search,
      },
    };
  };

  return (
    <div>
      <ul>
        {searchFilms.map((item) => (
          <li key={item.id}>
            <Link to={generateMoviLink(item.id)}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(MoviesPageItem);
