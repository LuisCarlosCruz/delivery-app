const { generateToken, verifyToken } = require('../token/token');
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

  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken({ email: user.email, id: user.id, role: user.role }),
  };
}

async function register(name, email, password, role = 'customer') {
  const passwordHash = cryptHashMd5(password);
  const userExists = await users.findOne({ where: { email } });
  if (userExists) {
    throw new Error('User already exists');
  }
  const user = await users.create({
    name,
    email,
    password: passwordHash,
    role,
  });
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken({ id: user.id, role: user.role }),
  };
}

async function adminRegister({ name, email, password, role }, token) {
  const decodedToken = verifyToken(token);
  if (decodedToken.role !== 'administrator') {
    throw new Error('You are not an admin');
  }
  const passwordHash = cryptHashMd5(password);
  const userExists = await users.findOne({ where: { email } });
  if (userExists) {
    throw new Error('User already exists');
  }
  const user = await users.create({ name, email, password: passwordHash, role });
  return {
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

module.exports = {
  login,
  register,
  adminRegister,
};