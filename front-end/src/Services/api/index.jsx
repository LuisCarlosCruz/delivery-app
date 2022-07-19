const axios = require('axios').default;

const URL_LOGIN = 'http://localhost:3001/login';
const URL_REGISTER = 'http://localhost:3001/register';

const loginApi = async (email, password) => {
  const infoUser = { email, password };
  try {
    const v = await axios.post(`${URL_LOGIN}`, infoUser);
    return v;
  } catch (e) {
    return e.response.status;
  }
};

const registerApi = async (name, email, password) => {
  const infoUser = { name, email, password };
  try {
    const resp = await axios.post(`${URL_REGISTER}`, infoUser);
    return resp.status;
  } catch (err) {
    return err.response.status;
  }
};

export { loginApi, registerApi };
