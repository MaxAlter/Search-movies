import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchForm from "../SearchForm/SearchForm";
import * as API from "../Api/services";
import MoviesPageItem from "./MoviesPageItem";
import queryString from "query-string";

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  state = {
    query: "",
    searchFilms: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;

    if (search) {
      const { query } = queryString.parse(search);
      this.searchMovies(query);
    }
  }

  searchMovies = (query) => {
    const { history } = this.props;
    this.setState({ query });
    API.searchMovie(query).then((responce) => {
      this.setState({ searchFilms: responce.data.results });
    });
    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { searchFilms } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.searchMovies} />
        <MoviesPageItem searchFilms={searchFilms} />
      </>
    );
  }
}
