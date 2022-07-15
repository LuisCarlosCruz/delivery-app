import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context';

const MainProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(`email:${email} | password: ${password}`);

  const contextValues = {
    email,
    setEmail,
    password,
    setPassword,
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
