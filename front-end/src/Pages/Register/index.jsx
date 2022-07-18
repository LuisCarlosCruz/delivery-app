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

  const statusError = 400;
  const messageError = 'Email ou Senha Inválido';

  return (
    <form>
      <label htmlFor="text">
        Nome:
        <input
          type="text"
          placeholder="Seu nome"
          onChange={ handleName }
          data-testid="common_register__input-name"
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          placeholder="email@trybeer.com.br"
          onChange={ handleEmail }
          data-testid="common_register__input-email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          placeholder="***********"
          onChange={ handlePassword }
          data-testid="common_register__input-password"
        />
      </label>
      <button
        type="button"
        onClick={ () => registerApi(name, email, password) }
        data-testid="common_register__button-register"
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
