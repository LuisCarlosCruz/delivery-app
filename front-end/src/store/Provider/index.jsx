import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context';
import loginApi from '../../Services/api';

const MainProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusCode, setStatusCode] = useState(0);

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
