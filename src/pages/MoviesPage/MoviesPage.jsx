// import MovieList from "../../components/MovieList/MovieList";
// import SearchBox from "../../components/SearchBox/SearchBox"
// import { useSearchParams } from "react-router-dom";
// import { useState, useEffect, useMemo } from "react";
// import {getMovieSearch} from "../../showFilms"
// export default function MoviesPage() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false)
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('query') ?? '';
//   const [movies, setMovies] = useState([]);
//   useEffect(()=>{
//     async function fetchMovies(query){
//       try{
//           setLoading(true);
//           const data = await getMovieSearch(query);
//           setMovies(data)
//       }
//       catch(error){
//           setError(true);
//       }
//       finally{
//           setLoading(false);
//       }
//     }
//       fetchMovies(movieName)
//   },[movieName])
  
//   const updateQueryString = query => {
//     const nextParams = query !== '' ? { query } : {};
//     setSearchParams(nextParams);
//   };


//      return (
//     <main>
//       <SearchBox value = {movieName} formSubmit ={updateQueryString}/>
//       {movies.length>0 && <MovieList movies={movies}/>}
//     </main>
//     );
//   }
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../../showFilms';
import  MovieList  from '../../components/MovieList/MovieList';
import  SearchBox  from '../../components/SearchBox/SearchBox';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]); // стан для зберігання фільмів

  // функція для отримання фільмів

  useEffect(() => {
    const fetchMovies = async query => {
      try {
        const { results } = await getMovieSearch(query);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };
    fetchMovies(movieName);
    // Отримувати фільми під час монтування компонента або зміни назви фільму
  }, [movieName]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };


  return (
    <main>
      <SearchBox value={movieName} formSubmit={updateQueryString} />
      <MovieList movies={movies} />
    </main>
  );
};
export default Movies;