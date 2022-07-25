const axios = require('axios');

const URL_SALES = 'http://localhost:3001/sales';
const URL_ALL_SALES = 'http://localhost:3001/sales/orders';

const createSales = async (info, token) => {
  try {
    const saleCreated = await axios
      .post(URL_SALES, info, { headers: { authorization: token } });
    return saleCreated;
  } catch (err) {
    return err.response.data.message;
  }
};

const getAllSales = async (email) => {
  try {
    const sales = await axios.post(URL_ALL_SALES, { email });
    return sales.data;
  } catch (err) {
    return err.response.status;
  }
};

export {
  createSales,
  getAllSales,
};
