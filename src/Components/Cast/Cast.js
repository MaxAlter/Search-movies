import React, { Component } from "react";
import * as API from "../Api/services";
import CastItem from "./CastItem";

// информация о актерском составе

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;

    API.Cast(movieId).then((response) => {
      this.setState({ cast: response.data.cast });
    });
  }

  render() {
    const { cast } = this.state;
    return <CastItem cast={cast} />;
  }
}
