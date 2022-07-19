import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../store';

const Login = () => {
  const { setEmail, setPassword, userLoginApi, statusCode } = useContext(MainContext);

  const navigate = useNavigate();

  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);
  const handleRedirect = () => {
    const path = '/register';
    navigate(path);
  };

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
      <button
        type="button"
        onClick={ () => handleRedirect() }
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
      <p>{statusCode === statusError && messageError}</p>
    </form>
  );
};

export default Login;
