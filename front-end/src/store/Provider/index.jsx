import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context';
import { loginApi } from '../../Services/api';

const MainProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [totalValue, setTotalValue] = useState(0);

  const userLoginApi = () => {
    loginApi(email, password).then((v) => setStatusCode(v));
  };

  const contextValues = {
    email,
    setEmail,
    password,
    setPassword,
    userLoginApi,
    totalValue,
    setTotalValue,
    name,
    setName,
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
