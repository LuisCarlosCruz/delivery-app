import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context';
import loginApi from '../../Services/api';

const MainProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusCode, setStatusCode] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const validateLogin = () => {
    const minLength = 6;
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(password.length);
    const boolValid = emailValidate.test(email) && password.length + 1 >= minLength;
    if (boolValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const userLoginApi = () => {
    loginApi(email, password).then((v) => setStatusCode(v));
  };

  const contextValues = {
    email,
    setEmail,
    password,
    setPassword,
    userLoginApi,
    statusCode,
    isDisabled,
    validateLogin,
  };

  return (
    <MainContext.Provider value={ contextValues }>
      { children }
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
