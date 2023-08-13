import { getMovieById } from '../movieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieById(`${movieId}/reviews`)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(() => `Oops, something went wrong! Please try again later!`);
  }, [movieId]);
  return (
    <ul>
      {reviews?.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>Sorry, but there are currently no reviews!</p>
      )}
    </ul>
  );
};

export default Reviews;
