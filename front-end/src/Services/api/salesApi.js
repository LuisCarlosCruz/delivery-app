const axios = require('axios').default;

const URL_ALL_SALES = 'http://localhost:3001/sales/orders';

const getAllSales = async (email) => {
  try {
    const sales = await axios.post(URL_ALL_SALES, { email });
    return sales.data;
  } catch (err) {
    return err.response.status;
  }
};

export default getAllSales;
