import axios from 'axios';
const baseUrl = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTE4ZmQ1OTI2YjExMzI5OGFjZDRmNGY4ZWEwYzI3NyIsInN1YiI6IjY2Mjk0YWUxMzc4MDYyMDE2NWRhN2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f1fGVyJijaYYO4JV-hu7G6Joni18Ov98dtbWiCM8010',
  },
};
export const getMovies = async () => {
  const response = await axios.get(
    `${baseUrl}/trending/movie/day?language=en-US"`,
    options
  );
  return response.data.results;
};

export const getMoviesById = async movieId => {
  const response = await axios.get(
    `${baseUrl}/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const getMoviesCast = async movieId => {
  const response = await axios.get(
    `${baseUrl}/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
};

export const getMoviesReviews = async movieId => {
  const response = await axios.get(
    `${baseUrl}/movie/${movieId}/reviews`,
    options
  );
  return response.data;
};

export const getMovieSearch = async query => {
  const response = await axios.get(
    `${baseUrl}/search/movie?query=${query}`,
    options
  );
  return response.data.results;
};
