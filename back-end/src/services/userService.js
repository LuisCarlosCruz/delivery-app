const { generateToken } = require('../token/token');
const { users } = require('../database/models/index');

async function login(email, password) {
  const user = await users.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid fields');
  }
  if (user.password !== password) {
    throw new Error('Invalid fields');
  }
  return generateToken({ id: user.id });
}

module.exports = {
  login,
};