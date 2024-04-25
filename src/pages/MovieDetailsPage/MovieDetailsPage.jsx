import { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import {getMoviesById} from "../../showFilms"
import css from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [moviesString, setMoviesString] = useState(null);
   

    useEffect(()=>{
        async function fetchMovie(){
          try{
              const data = await getMoviesById(movieId);
              setMoviesString(data);
            } catch(error){
                console.error("Error fetching movie:", error);
            }
            }
            fetchMovie()
      }, [movieId])
      return (
        <div >
          {moviesString && (
            <div className={css.cont}>
              <img className={css.img} src={`https://image.tmdb.org/t/p/w500${moviesString.poster_path}`} alt={moviesString.title} />
              <div>
                <h2>{moviesString.title}</h2>
                <p>User Score {Math.round(moviesString.vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{moviesString.overview}</p>
                <h4>Genres</h4>
                <p>{moviesString.genres.map((genre) => genre.name).join(', ')}</p>
              </div>
              </div>
          )}
          
           <p> Additional information</p>
           <ul>
            <li>
                <Link >Cast</Link>
            </li>
            <li>
                <Link >Reviews</Link>
            </li>
           </ul>
        </div>
      );
  }