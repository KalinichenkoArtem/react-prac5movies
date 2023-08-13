import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import notFound from '../images/notFound.jpg';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ id, original_title, poster_path }) => (
        <div key={id}>
          <Link state={{ from: location }} to={`movies/${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                  : `${notFound}`
              }
              alt={original_title}
            />
            <h3>{original_title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
