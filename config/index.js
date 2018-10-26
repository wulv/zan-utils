const baseConfig = require('./base');
const envConfig = require('./env');
const esdoc = require('./esdoc');
const targetConfig = require('./target');

module.exports = {
  ...baseConfig,
  ...envConfig,
  ...targetConfig,
  esdoc,
};
