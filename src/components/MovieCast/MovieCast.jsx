import {getMoviesCast} from "../../showFilms"
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from './MovieCast.module.css'
export default function MovieCast() {
  const {movieId} = useParams();
  const [credits, setCredits] = useState([])

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 

  useEffect(()=>{
      async function fetchMovie(){
        try{
          setError(false);
          setLoading(true);
            const data = await getMoviesCast(movieId);
            setCredits(data);
          } catch(error){
            setError(true);
          }
          finally{
            setLoading(false)
          }
          }
          fetchMovie()
    }, [movieId])
    return (
     <div className={css.cont}> 
       {loading &&  <Loader/>}
       {error &&  <ErrorMessage/>}
        <ul className={css.item}>
        {credits.map((movie)=>(
          <li key={movie.id} className={css.itemCast}>
             {movie.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.profile_path}`}
                alt={movie.known_for_department}
              />
            ) : (
              <span>No Image Available</span>
            )}
            <h3>{movie.name}</h3>
            <p>Character: {movie.character}</p>
          </li>
        ))}
      </ul>
    
     </div>
    );
  }