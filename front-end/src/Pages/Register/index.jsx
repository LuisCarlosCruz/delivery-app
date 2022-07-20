import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerApi } from '../../Services/api';
import { MainContext } from '../../store';

const Register = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
  } = useContext(MainContext);

  const [statusCode, setStatusCode] = useState(null);

  const statusCreate = 201;
  const statusConflict = 409;
  const messageError = 'Email ou Senha Inválido';

  const handleName = ({ target }) => setName(target.value);
  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const responseAPI = await registerApi(name, email, password);
    if (responseAPI !== statusCreate) setStatusCode(responseAPI);

    // verificar se o nome ou email ja existe
    if (responseAPI === statusConflict) {
      event.preventDefault();
      setStatusCode(responseAPI);
    } else {
      navigate('/customer/products');
    }
  };

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  const emailValid = emailCheck.test(email);
  const limit = 6;
  const max = 11;
  const btndisabled = emailValid && password.length >= limit && name.length > max;

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
        onClick={ (e) => handleSubmit(e) }
        data-testid="common_register__button-register"
        disabled={ !btndisabled }
      >
        CADASTRAR
      </button>
      <p
        data-testid="common_register__element-invalid_register"
      >
        { statusCode && messageError }
      </p>
    </form>
  );
};

export default Register;
