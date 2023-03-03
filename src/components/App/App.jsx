import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/operations';
import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'routes/PrivateRoute';
import RestrictedRoute from 'routes/RestrictedRoute';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" index element={<HomePage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
