import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.user__auth}>
      <>
        <NavLink to="/login" className={s.user__link}>
          Log In
        </NavLink>
        <NavLink to="/register" className={s.user__link}>
          Sign Up
        </NavLink>
      </>
    </div>
  );
};

export default UserMenu;
