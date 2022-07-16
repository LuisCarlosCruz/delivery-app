const axios = require('axios').default;

const URL_LOGIN = 'http://localhost:3001/login';

const loginApi = async (email, password) => {
  const infoUser = { email, password };
  try {
    const v = await axios.post(`${URL_LOGIN}`, infoUser);
    return v.status;
  } catch (e) {
    return e.response.status;
  }
};

export default loginApi;
