import { useSelector } from 'react-redux';
import authSelectors from 'redux/user/auth-selectors';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
