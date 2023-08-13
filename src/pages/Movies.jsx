import SearchBar from '../components/Searchbar';
import { getMovieByName } from '../movieAPI';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import notFound from '../images/notFound.jpg';
import { Suspense, useEffect, useState } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovieByName(movieName)
      .then(({ results }) => {
        setMovies([...results]);
      })
      .catch(() => `Whoops, something went wrong! Please try again later!`);
  }, [movieName]);

  const handleFormSubmit = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setMovies([]);
  };

  return (
    <main>
      <SearchBar type="text" onSubmit={handleFormSubmit} />
      <div>
        {movies.map(({ id, original_title, poster_path }) => (
          <div key={id}>
            <Link state={{ from: location }} to={`${id}`}>
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
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default Movies;
