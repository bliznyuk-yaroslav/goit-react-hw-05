import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ol>
      {movies.map(movie => (
        <li key={movie.id} className={css.link}>
          <NavLink to={`/movies/${movie.id}`} state={location}>
            <p>{movie.original_title}</p>
          </NavLink>
        </li>
      ))}
    </ol>
  );
}
