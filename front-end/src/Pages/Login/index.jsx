import React, { useContext } from 'react';
import { MainContext } from '../../store';

const Login = () => {
  const {
    setEmail,
    setPassword,
    userLoginApi,
    statusCode,
    validateLogin,
    isDisabled } = useContext(MainContext);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
    validateLogin();
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
    validateLogin();
  };

  const messageError = 'Email ou Senha Inválido';
  const statusError = 404;
  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          data-testid="common_login__input-email"
          type="text"
          placeholder="email@trybeer.com.br"
          onChange={ handleEmail }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="common_login__input-password"
          type="password"
          placeholder="***********"
          onChange={ handlePassword }
        />
      </label>
      <button
        data-testid="common_login__button-login"
        type="button"
        onClick={ userLoginApi }
        disabled={ isDisabled }
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
      <p
        data-testid="common_login__element-invalid-email"
      >
        {statusError === statusCode && messageError}
      </p>
    </form>
  );
};

export default Login;
