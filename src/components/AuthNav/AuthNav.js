import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';


export default function AuthNav() {
  return (
    <div>
      <NavLink className={s.NavLink} exact="true" to="/register">
        Register
      </NavLink>
      <NavLink className={s.NavLink} exact="true" to="/login">
        Login
      </NavLink>
    </div>
  );
}
