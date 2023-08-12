import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { List, Nav } from './App.styled';

export const App = () => {
  return (
    <>
      <List>
        <Nav>
          <Link to="/">Home</Link>
        </Nav>
        <Nav>
          <Link to="/movies">Movies</Link>
        </Nav>
      </List>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
