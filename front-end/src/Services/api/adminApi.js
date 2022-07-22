const axios = require('axios').default;

const URL_LOGIN = 'http://localhost:3001/admin/manage';

const adminManageApi = async (data, token) => {
  try {
    const v = await axios.post(`${URL_LOGIN}`, data, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return v.status;
  } catch (e) {
    return e.response.status;
  }
};

export default adminManageApi;
