const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  port: process.env.PORT || 8500,
  isTest: process.env.NODE_ENV === 'test'
};
