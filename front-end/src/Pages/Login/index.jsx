import React, { useContext } from 'react';
import { MainContext } from '../../store';

const Login = () => {
  const { setEmail, setPassword, userLoginApi, statusCode } = useContext(MainContext);

  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  const statusError = 400;
  const messageError = 'Email ou Senha Inválido';
  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          placeholder="email@trybeer.com.br"
          onChange={ handleEmail }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          placeholder="***********"
          onChange={ handlePassword }
        />
      </label>
      <button
        type="button"
        onClick={ userLoginApi }
      >
        LOGIN
      </button>
      <button type="button">Ainda não tenho conta</button>
      <p>{statusCode === statusError && messageError}</p>
    </form>
  );
};

export default Login;
