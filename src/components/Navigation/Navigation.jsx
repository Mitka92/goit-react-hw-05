import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? css.active : css.link)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? css.active : css.link)}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
