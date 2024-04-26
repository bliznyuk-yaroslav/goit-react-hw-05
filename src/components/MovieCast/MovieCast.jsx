import {getMoviesCast} from "../../showFilms"
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
export default function MovieCast() {
  const {movieId} = useParams();
  const [credits, setCredits] = useState([])
 

  useEffect(()=>{
      async function fetchMovie(){
        try{
            const data = await getMoviesCast(movieId);
            setCredits(data);
          } catch(error){
              console.error("Error fetching movie:", error);
          }
          }
          fetchMovie()
    }, [movieId])
    return (
     <div>
      <ul>
        {credits.map((movie)=>(
          <li key={movie.id}>
             <h3>{movie.name}</h3>
             {movie.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.profile_path}`}
                alt={movie.known_for_department}
              />
            ) : (
              <span>No Image Available</span>
            )}
            <p>Character: {movie.character}</p>
          </li>
        ))}
      </ul>
    
     </div>
    );
  }