import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
    const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink exact="true" to="/" className={s.NavLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={s.NavLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
