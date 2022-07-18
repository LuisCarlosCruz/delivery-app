const axios = require('axios').default;

const URL_LOGIN = 'http://localhost:3001/admin/manage';

const adminManageApi = async (name, email, password, role) => {
  const infoNewUser = { name, email, password, role };
  try {
    const v = await axios.post(`${URL_LOGIN}`, infoNewUser);
    return v.status;
  } catch (e) {
    return e.response.status;
  }
};

export default adminManageApi;
