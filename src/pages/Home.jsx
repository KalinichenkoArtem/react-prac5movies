import { useState, useEffect } from 'react';
import { getTrendMovies } from '../movieAPI';
import MoviesList from '../components/MoviesList';

import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendMovies().then(({ results }) => {
      setMovies([...results]);
    });
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
