import React, { Component } from "react";
import * as API from "../Api/services";
import HomePageItem from "./HomePageItem";

// домашняя страница

export default class HomePage extends Component {
  state = {
    popular: [],
  };

  componentDidMount() {
    API.popularFilms().then((responce) => {
      this.setState({ popular: responce.data.results });
    });
  }

  render() {
    const { popular } = this.state;
    return <HomePageItem popular={popular} />;
  }
}
