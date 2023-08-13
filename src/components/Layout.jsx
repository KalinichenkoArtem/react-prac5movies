import { List, Nav } from './Layout.styled';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
