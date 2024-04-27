import { useEffect, useState, useRef } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from '../../showFilms';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? '/movies');
  const { movieId } = useParams();
  const [moviesString, setMoviesString] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMoviesById(movieId);
        setMoviesString(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);
  return (
    <div className={css.contLoad}>
      <NavLink to={backLinkURLRef.current} className={css.btnBack}>
        Go back
      </NavLink>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {moviesString && (
        <div className={css.cont}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${moviesString.poster_path}`}
            alt={moviesString.title}
          />
          <div>
            <h2>{moviesString.title}</h2>
            <p>User Score {Math.round(moviesString.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{moviesString.overview}</p>
            <h4>Genres</h4>
            <p>{moviesString.genres.map(genre => genre.name).join(', ')}</p>

            <div>
              <h4> Additional information</h4>
              <ul className={css.item}>
                <li className={css.itemLink}>
                  <NavLink to="cast" className={getNavLinkClass}>
                    Cast
                  </NavLink>
                </li>
                <li className={css.itemLink}>
                  <NavLink to="reviews" className={getNavLinkClass}>
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
}
