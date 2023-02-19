import css from './layout.module.css';

import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className={css.layout}>
        <NavLink className={css.layout_link} to="/">
          <button className={css.btn_layout}>Home</button>
        </NavLink>
        <NavLink className={css.layout_link} to={`/movies`}>
          <button className={css.btn_layout}> Movies</button>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
export default Layout;
