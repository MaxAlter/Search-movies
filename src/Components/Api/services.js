import axios from "axios";

// 29385a5ed2e1b13daa9aab11c1c0dd4d
// https://api.themoviedb.org/3/movie/550?api_key=29385a5ed2e1b13daa9aab11c1c0dd4d

const Url = "https://api.themoviedb.org/3";
const key = "29385a5ed2e1b13daa9aab11c1c0dd4d";

export const popularFilms = () =>
  axios.get(`${Url}/trending/movie/week?api_key=${key}`);

export const searchInfo = (id) =>
  axios.get(`${Url}/movie/${id}?api_key=${key}`);

export const searchMovie = (query = "batman") =>
  axios.get(
    `${Url}/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`
  );

export const Cast = (id) =>
  axios.get(`${Url}/movie/${id}/credits?api_key=${key}`);

export const Reviews = (id) =>
  axios.get(`${Url}/movie/${id}/reviews?api_key=${key}`);
