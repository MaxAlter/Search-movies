import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import * as API from "../Api/services";
import routes from "../../routes";
import MovieDetailsPageItem from "./MovieDetailsPageItem";
import ButtonDetails from "./ButtonDetails";
import st from "./MoviesDetailsPage.module.css";

//  страница с детальной информацией о кинофильме. //

const asyncCast = lazy(() =>
  import("../Cast/Cast" /* webpackChunkName: "Cast" */)
);

const asyncReviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

export default class MovieDetailsPage extends Component {
  state = { searchFilm: { genres: [] } };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.searchInfo(movieId).then((responce) => {
      this.setState({ searchFilm: responce.data });
    });
  }

  onBackButton = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (state) {
      this.props.history.push(state.from);

      // if (state.from) {
      //   history.push(state.from);
      // }
    } else {
      history.push(routes.HOME);
    }
  };

  render() {
    const { searchFilm } = this.state;
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <ButtonDetails onClick={this.onBackButton} />

        <MovieDetailsPageItem searchFilm={searchFilm} />
        <ul className={st.list_details} >
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li className={st.list_details_item} >
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={routes.MOVIE_CAST} component={asyncCast} />
            <Route exact path={routes.MOVIE_REVIEWS} component={asyncReviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
