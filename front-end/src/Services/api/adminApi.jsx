import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

const adminManageApi = async (url, body, token) => {
  try {
    const response = await api.post(url, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export default adminManageApi;
