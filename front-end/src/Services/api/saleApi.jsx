const axios = require('axios');

const URL_SALES = 'http://localhost:3001/sales';

const createSales = async (info, token) => {
  try {
    const saleCreated = await axios
      .post(URL_SALES, info, { headers: { authorization: token } });
    return saleCreated;
  } catch (err) {
    return err.response.data.message;
  }
};

export default createSales;
