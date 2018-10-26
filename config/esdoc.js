const base = require('./base');

module.exports = {
  source: base.esTemp,
  destination: 'docs',
  plugins: [
    {
      name: 'esdoc-standard-plugin',
    },
  ],
};
