import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from './Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <ul className={css.header}>
        <li className={css.navlink}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.navlink}>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
