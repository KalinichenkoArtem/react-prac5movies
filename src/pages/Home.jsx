import { Link } from 'react-router-dom';
import { Title, List } from './Home.styled';

export const Home = ({ movies }) => {
  return (
    <main>
      <Title>Trending today</Title>
      <List>
        {['movie-1, movie-2, movie-3'].map(movie => (
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              key={movie}
              to={`${movie}`}
            >
              {movie}
            </Link>
          </li>
        ))}
      </List>
    </main>
  );
};

export default Home;
