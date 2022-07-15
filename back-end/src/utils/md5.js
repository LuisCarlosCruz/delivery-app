const crypto = require('crypto');

const cryptHashMd5 = (password) =>
  crypto
    .createHash('md5')
    .update(password)
    .digest('hex');

module.exports = { cryptHashMd5 };
