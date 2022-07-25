const axios = require('axios').default;

const URL_PRODUCTS = 'http://localhost:3001/products';

const getAllProducts = async () => {
  try {
    const products = await axios.get(`${URL_PRODUCTS}`);
    return products;
  } catch (e) {
    return e.response.status;
  }
};

export default getAllProducts;
