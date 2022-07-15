const { generateToken } = require('../token/token');
const { users } = require('../database/models/index');
const { cryptHashMd5 } = require('../utils/md5');

async function login(email, password) {
  const user = await users.findOne({ where: { email } });
  const passwordHash = cryptHashMd5(password);
  if (!user) {
    throw new Error('Invalid email');
  }
  if (user.password !== passwordHash) {
    throw new Error('Invalid password');
  }
  return generateToken({ id: user.id });
}

module.exports = {
  login,
};