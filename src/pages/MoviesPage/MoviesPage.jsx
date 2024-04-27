import MovieList from '../../components/MovieList/MovieList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { getMovieSearch } from '../../showFilms';
import Loader from '../../components/Loader/Loader';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies(query) {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovieSearch(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies(movieName);
  }, [movieName]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div className={css.cont}>
      <SearchBox value={movieName} onSubmit={updateQueryString} />
      {loading && <Loader className={css.loader} />}
      <MovieList movies={movies} />
    </div>
  );
}
