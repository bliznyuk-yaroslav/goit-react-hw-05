import { useEffect, useState } from "react";
import { getMovies } from "../../showFilms";
import css from "./HomePage.module.css"
import MovieList from '../../components/MovieList/MovieList'

export default function HomePage() {
    const [moviesString, setMoviesString] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(()=>{
      async function fetchMovies(){
        try{
            setLoading(true);
            const data = await getMovies();
            setMoviesString(data)
        }
        catch(error){
            setError(true);
        }
        finally{
            setLoading(false);
        }
      }
        fetchMovies()
    },[])

    return (
     <div>
        <p className={css.text}> Trending today</p>
        {loading && <p> Loading movies.......</p>}
        {moviesString.length>0 && <MovieList movies={moviesString}/>}
     </div>
    );
  }  