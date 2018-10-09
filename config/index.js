const baseConfig = require('./base');
const devConfig = require('./dev');
const prodConfig = require('./prod');

const isProd = process.env.NODE_ENV === 'production';
const envConfig = isProd ? devConfig : prodConfig;
module.exports = { ...baseConfig, ...envConfig };
