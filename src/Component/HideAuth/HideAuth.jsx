import { useSelector } from 'react-redux';
import authSelectors from 'redux/user/auth-selectors';
import { Outlet, Navigate } from 'react-router-dom';

const HideAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};

export default HideAuth;
