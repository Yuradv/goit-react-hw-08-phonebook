import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import s from './UserMenu.module.css';


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={s.container}>
      <span className={s.name}>Welcome, {user.email}!</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
