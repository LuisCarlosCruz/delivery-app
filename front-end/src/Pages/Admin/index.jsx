import React, { useState } from 'react';
import adminManageApi from '../../Services/api/adminApi';
import COMPONENT from '../../Components';
import './admin.css';

const Admin = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });
  const [statusCode, setStatusCode] = useState(0);

  const messageError = 'Usuário já existe';
  const errorStatus = 409;
  const seller = 'seller';
  const customer = 'customer';

  const handleName = ({ target }) => setUser({ ...user, name: target.value });
  const handleEmail = ({ target }) => setUser({ ...user, email: target.value });
  const handlePassword = ({ target }) => setUser({ ...user, password: target.value });
  const handleRole = ({ target }) => setUser({ ...user, role: target.value });

  const MIN_PASSWORD = 6;
  const MIN_NAME = 12;
  const validEmail = /\S+@\S+\.\S+/;
  const disableButton = validEmail.test(user.email)
    && user.password.length > MIN_PASSWORD
    && user.name.length > MIN_NAME
    && user.role !== undefined;

  const validateUser = () => {
    adminManageApi(user.name, user.email, user.password, user.role)
      .then((v) => setStatusCode(v));
  };

  return (
    <div>
      <COMPONENT.Header page="admin" />
      <div className="form">
        Cadastrar novo usuário
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="admin_manage__input-name"
              type="text"
              placeholder="Jorginho da Silva"
              onChange={ handleName }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              data-testid="admin_manage__input-email"
              type="text"
              placeholder="email@trybeer.com.br"
              onChange={ handleEmail }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              data-testid="admin_manage__input-password"
              type="password"
              placeholder="***********"
              onChange={ handlePassword }
            />
          </label>
          <select
            data-testid="admin_manage__select-role"
            onChange={ handleRole }
          >
            <option
              value={ seller }
            >
              Vendedor
            </option>
            <option
              value={ customer }
            >
              Cliente
            </option>
          </select>
          <button
            data-testid="admin_manage__button-register"
            type="button"
            disabled={ !disableButton }
            onClick={ () => validateUser() }
          >
            CADASTRAR
          </button>
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            {statusCode === errorStatus && messageError}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Admin;
