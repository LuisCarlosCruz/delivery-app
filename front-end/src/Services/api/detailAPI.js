import axios from 'axios';

const URL = 'http://localhost:3001';

const getSalesById = async (id) => {
  try {
    const sales = await axios.get(`${URL}/sales/${id}`);
    return await sales.data;
  } catch (err) {
    return err.response.status;
  }
};

export default getSalesById;
