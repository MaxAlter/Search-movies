import React, { Component } from "react";
import PropTypes from "prop-types";
import * as API from "../Api/services";
import ReviewsItem from "./ReviewsItem";

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
    movieId: PropTypes.shape({}),
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.Reviews(movieId).then((responce) => {
      this.setState({ reviews: responce.data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return <ReviewsItem reviews={reviews} />;
  }
}
