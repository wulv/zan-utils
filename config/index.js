const baseConfig = require('./base');
const envConfig = require('./env');
const esdoc = require('./esdoc');
const targetConfig = require('./target');
const packageRewrite = require('./package-rewrite');

module.exports = {
  ...baseConfig,
  ...envConfig,
  ...targetConfig,
  packageRewrite,
  esdoc,
};
