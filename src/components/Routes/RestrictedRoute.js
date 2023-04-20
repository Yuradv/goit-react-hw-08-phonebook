import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogggedIn } = useAuth();

  return isLogggedIn ? <Navigate to={redirectTo} /> : Component ;
};
