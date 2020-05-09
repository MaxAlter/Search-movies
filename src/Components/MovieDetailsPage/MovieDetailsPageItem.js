import React from "react";
import ImageSrc from "../../helpers";
import st from "./MoviesDetailsPage.module.css";

const MovieDetailsPage = ({ searchFilm }) => {
  return (
    <div className={st.list}>
      <img className={st.list_img} src={ImageSrc(searchFilm.poster_path)} alt="" width="250" />
      <div className={st.list_item}>
        <h2>
          {searchFilm.original_title} {searchFilm.release_date}
        </h2>
        <p>User score: {searchFilm.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{searchFilm.overview}</p>
        <h2>Genres</h2>
        {searchFilm.genres.reduce((acc, el) => `${acc} ${el.name}`, "")}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
