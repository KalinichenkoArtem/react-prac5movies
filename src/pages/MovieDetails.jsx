import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  generatePath,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from '../movieAPI';
import notFound from '../images/notFound.jpg';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(
        ({
          id,
          poster_path,
          original_title,
          overview,
          release_date,
          vote_average,
          genres,
        }) => {
          setMovie({
            id,
            poster_path,
            original_title,
            overview,
            release_date,
            vote_average,
            genres,
          });
        }
      )
      .catch(() => `Whoops, something went wrong! Please try again later!`);
  }, [movieId]);

  const backLink = location?.state?.from ?? '/';

  const {
    id,
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
  } = movie;

  return (
    <main>
      <Link to={backLink}>Go back</Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : `${notFound}`
          }
          alt={original_title}
        />
        <div>
          <h2>
            {original_title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User scores: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(genre => genre.name).join(', ')}</p>
          <ul>
            <li>
              <Link
                state={{ from: location?.state?.from }}
                to={generatePath('cast', { id })}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                state={{ from: location?.state?.from }}
                to={generatePath('reviews', { id })}
              >
                Reviews
              </Link>
            </li>
          </ul>

          <Suspense fallback={<div>LOADING...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
