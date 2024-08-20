import { NavLink, Outlet } from "react-router-dom";
import css from "./MoreInfo.module.css";
const MoreInfo = () => {
  return (
    <>
      <div>
        <nav className={css.nav}>
          <NavLink
            to="cast"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Cast
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Reviews
          </NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MoreInfo;
