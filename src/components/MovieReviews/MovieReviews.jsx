import {getMoviesReviews} from "../../showFilms"
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState([])
 

  useEffect(()=>{
      async function fetchMovie(){
        try{
            const data = await getMoviesReviews(movieId);
            setReviews(data.results);
          } catch(error){
              console.error("Error fetching movie:", error);
          }
          }
          fetchMovie()
    }, [movieId])
    return (
      <div>
      {reviews.length > 0 ? (
        <ul>
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