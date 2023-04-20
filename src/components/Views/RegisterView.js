import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input type="text" name="name" placeholder='enter'/>
      </label>
      <label>
        E-mail
        <input type="email" name="email" placeholder='example@domain.com'/>
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder='*****'/>
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};
