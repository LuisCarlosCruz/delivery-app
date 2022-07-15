import React, { useState, useContext } from 'react';
import { MainContext } from '../../store';

const Login = () => {
  const { setEmail, setPassword } = useContext(MainContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleEmail = ({ target }) => setUser({ ...user, email: target.value });
  const handlePassword = ({ target }) => setUser({ ...user, password: target.value });

  const validateUser = () => {
    const minLength = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const boolValid = emailRegex.test(user.email) && user.password.length > minLength;
    if (boolValid) {
      setEmail(user.email);
      setPassword(user.password);
    } else {
      console.log('Dados inválidos');
    }
  };

  return (
    <form>
      <label htmlFor="email">
        Email
        <input
          type="text"
          placeholder="email@trybeer.com.br"
          onChange={ handleEmail }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          placeholder="***********"
          onChange={ handlePassword }
        />
      </label>
      <button
        type="button"
        onClick={ () => validateUser() }
      >
        LOGIN
      </button>
      <button type="button">Ainda não tenho conta</button>
    </form>
  );
};

export default Login;
