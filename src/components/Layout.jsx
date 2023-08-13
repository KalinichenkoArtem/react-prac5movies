import { List, Nav } from './Layout.styled';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <List>
          <Nav>
            <Link to="/">Home</Link>
          </Nav>
          <Nav>
            <Link to="/movies">Movies</Link>
          </Nav>
        </List>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
