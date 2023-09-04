import Container from './Container';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import operations from 'redux/user/auth-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute/';
import HideAuth from './HideAuth/';
import Loader from 'Component/Loader/';
import authSelectors from 'redux/user/auth-selectors';
const Contacts = lazy(() => import('./views/Contacts'));
const Homepage = lazy(() => import('./views/Home'));
const Navigation = lazy(() => import('./Navigation'));

const Phonebook = () => {
  const dispatch = useDispatch();
  const isUserRefresh = useSelector(authSelectors.getUserRefresh);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isUserRefresh && (
      <Suspense fallback={<Loader />}>
        <Navigation />

        <Container>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>

            <Route element={<HideAuth />}>
              <Route path="/register" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Route>

            <Route path="*" element={<h2>404 page not found</h2>} />
          </Routes>
        </Container>
      </Suspense>
    )
  );
};

export default Phonebook;
