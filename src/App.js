import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import routes from "./routes";
import st from "./App.module.css";

const asyncHomePage = lazy(() =>
  import("./Components/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const asyncMovieDetailsPage = lazy(() =>
  import(
    "./Components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

const asyncMoviesPage = lazy(() =>
  import(
    "./Components/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
  )
);

export default class App extends Component {
  state = {
    films: [],
  };

  render() {
    return (
      <>
        <header className={st.header}>
          <NavLink className={st.link_header} to={routes.HOME}>
            HOME
          </NavLink>
          <NavLink className={st.link_header} to={routes.MOVIES}>
            MOVIES
          </NavLink>
        </header>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={routes.HOME} component={asyncHomePage} />
            <Route
              path={routes.MOVIE_DETAILS}
              component={asyncMovieDetailsPage}
            />
            <Route exact path={routes.MOVIES} component={asyncMoviesPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
