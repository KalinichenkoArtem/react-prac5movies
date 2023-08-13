import { getMovieById } from '../movieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import unnamed from '../images/unnamed.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieById(`${movieId}/credits`)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(() => `Oops, something went wrong! Please try again later!`);
  }, [movieId]);
  return (
    <ul>
      {cast?.length > 0 ? (
        cast.map(({ character, credit_id, name, profile_path }) => (
          <li key={credit_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `${unnamed}`
              }
              alt={name}
            />
            <p>
              {name} ({character})
            </p>
          </li>
        ))
      ) : (
        <p>Sorry, but there is currently no information about the cast!</p>
      )}
    </ul>
  );
};

export default Cast;
