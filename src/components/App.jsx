import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import Contacts from './Contacts/Contacts';
import HomeView from './Views/HomeView';
import { Layout } from './Layout';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import  RegisterView  from './Views/RegisterView';
import  LoginView  from './Views/LoginView';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { PulseLoader } from 'react-spinners';




export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing ? <PulseLoader/> : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginView />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
}
