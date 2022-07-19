import React, { useContext } from 'react';
import { registerApi } from '../../Services/api';
import { MainContext } from '../../store';

const Register = () => {
  const {
    statusCode,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
  } = useContext(MainContext);

  const handleName = ({ target }) => setName(target.value);
  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  const emailValid = emailCheck.test(email);
  const limit = 6;
  const max = 12;
  const btndisabled = emailValid && password.length >= limit && name.length >= max;

  const statusError = 400;
  const messageError = 'Email ou Senha Inválido';

  return (
    <form>
      <label htmlFor="text" title="name">
        Nome:
        <input
          type="text"
          placeholder="Seu nome"
          onChange={ (e) => handleName(e) }
          data-testid="common_register__input-name"
        />
      </label>
      <label htmlFor="email" title="email">
        Email:
        <input
          type="text"
          placeholder="email@tryber.com.br"
          onChange={ (e) => handleEmail(e) }
          data-testid="common_register__input-email"
        />
      </label>
      <label htmlFor="password" title="password">
        Senha:
        <input
          type="password"
          placeholder="***********"
          onChange={ (e) => handlePassword(e) }
          data-testid="common_register__input-password"
        />
      </label>
      <button
        type="button"
        onClick={ () => registerApi(name, email, password) }
        data-testid="common_register__button-register"
        disabled={ !btndisabled }
      >
        CADASTRAR
      </button>
      <p
        data-testid="common_register__element-invalid_register"
      >
        {statusCode === statusError && messageError}
      </p>
    </form>
  );
};

export default Register;
