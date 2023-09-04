import UserMenu from 'Component/UserMenu/UserMenu';
import s from './Navigation.module.css';
import Container from 'Component/Container/';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/user/auth-selectors';
import { useSelector } from 'react-redux';
import operations from 'redux/user/auth-operation';
import { useDispatch } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const useName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <header className={s.header__box}>
      <Container>
        <nav className={s.header__thumb}>
          <NavLink to="/" className={s.header__logo}>
            Phonebook
          </NavLink>
          {isLoggedIn === true ? (
            <>
              <NavLink to="contacts" className={s.header__link}>
                Contacts
              </NavLink>
              <div className={s.user__thumb}>
                <h2 className={s.user__name}>welcome, {useName}</h2>
                <button
                  className={s.user__btn}
                  type="button"
                  onClick={() => dispatch(operations.logOut())}
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <UserMenu />
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
