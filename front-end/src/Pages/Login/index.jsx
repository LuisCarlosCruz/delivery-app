import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../store';
import { loginApi } from '../../Services/api/loginApi';
import { getLocalStorage } from '../../utils/localStorage';

const Login = () => {
  const messageError = 'Email ou Senha Inválido';
  const navigate = useNavigate();
  const [boolMessage, setBoolMessage] = useState(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    validateLogin,
    isDisabledLogin } = useContext(MainContext);

  useEffect(() => {
    const infoUser = getLocalStorage('user');
    if (!infoUser || infoUser.length < 1) {
      navigate('/login');
    } else {
      navigate('/customer/products');
    }
  }, [navigate]);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
    validateLogin();
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
    validateLogin();
  };

  const validStatus = (status) => {
    if (status === undefined) {
      setBoolMessage(true);
    }
  };

  const validRole = (role) => {
    if (role === 'customer') {
      navigate('/customer/products');
    } if (role === 'seller') {
      navigate('/seller/orders');
    } if (role === 'administrator') {
      navigate('/admin/manage');
    }
  };

  const LoginButton = async () => {
    const response = await loginApi(email, password);
    validStatus(response.status);
    validRole(response.data.role);
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  const handleRegister = () => {
    const path = '/register';
    navigate(path);
  };

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
        onClick={ LoginButton }
        disabled={ isDisabledLogin }
      >
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ handleRegister }
      >
        Ainda não tenho conta
      </button>
      <p
        data-testid="common_login__element-invalid-email"
      >
        {boolMessage && messageError}
      </p>
    </form>
  );
};

export default Login;
