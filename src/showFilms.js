import axios from "axios";
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTE4ZmQ1OTI2YjExMzI5OGFjZDRmNGY4ZWEwYzI3NyIsInN1YiI6IjY2Mjk0YWUxMzc4MDYyMDE2NWRhN2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f1fGVyJijaYYO4JV-hu7G6Joni18Ov98dtbWiCM8010",
  },
};
export const getMovies = async () => {
  const response = await axios.get(url, options);
  console.log(response.data.results);
  return response.data.results;
};

export const getMoviesById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  console.log(response.data);
  return response.data;
};
