import {getMoviesReviews} from "../../showFilms"
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader"
import css from './MovieReviews.module.css'

export default function MovieReviews() {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 

  useEffect(()=>{
      async function fetchMovie(){
        try{
          setError(false);
          setLoading(true);
            const data = await getMoviesReviews(movieId);
            setReviews(data.results);
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
      {reviews.length > 0 ? (
        <ul className={css.item}>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this movie</p>
      )}
    </div>
    );
  }