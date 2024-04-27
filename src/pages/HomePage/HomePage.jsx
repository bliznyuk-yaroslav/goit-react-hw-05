import { useEffect, useState } from 'react';
import { getMovies } from '../../showFilms';
import css from './HomePage.module.css';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [moviesString, setMoviesString] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovies();
        setMoviesString(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.cont}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {moviesString.length > 0 && <p className={css.text}> Trending today</p>}
      {moviesString.length > 0 && <MovieList movies={moviesString} />}
    </div>
  );
}
