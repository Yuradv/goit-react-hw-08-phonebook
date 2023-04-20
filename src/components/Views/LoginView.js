import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginView = () => {
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        E-mail
        <input type="email" name="email" placeholder="example@domain.com" />
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder="*****" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};
