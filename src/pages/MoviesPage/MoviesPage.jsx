import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox"
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import {getMovieSearch} from "../../showFilms"
export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  // useEffect(()=>{
  //   const fetchMovies = async (query) => {
  //     try{
  //       const data = await getMovieSearch(query);
  //       setMovies(data.results);
  //     }catch(error){
  //       console.log('Error fetching movies', error)
  //     }
  //   };
  //   fetchMovies(movieName)
  // }, [movieName]);



  useEffect(()=>{
    async function fetchMovies(query){
      try{
          setLoading(true);
          const data = await getMovieSearch(query);
          setMovies(data)
      }
      catch(error){
          setError(true);
      }
      finally{
          setLoading(false);
      }
    }
      fetchMovies(movieName)
  },[movieName])
  
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };


     return (
    <main>
      <SearchBox value = {movieName} formSubmit ={updateQueryString}/>
      {movies.length>0 && <MovieList movies={movies}/>}
    </main>
    );
  }