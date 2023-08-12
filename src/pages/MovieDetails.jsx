import { Link } from 'react-router-dom';

import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

export const MovieDetails = () => {
  return (
    <main>
      <button>Go Back</button>
      <img src="" alt="" />
      <h1></h1>
      <p></p>
      <h2></h2>
      <p></p>
      <h3></h3>
      <p></p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="/movies/:movieId/cast">Cast</Link>
        </li>
        <li>
          <Link to="/movies/:movieId/reviews">Reviews</Link>
        </li>
      </ul>
    </main>
  );
};

export default MovieDetails;
