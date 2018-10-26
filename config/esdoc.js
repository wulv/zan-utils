const base = require('./base');

module.exports = {
  source: base.esTemp,
  destination: 'docs',
  plugins: [
    {
      "name": "esdoc-standard-plugin"
    },
    {
      "name": "esdoc-inject-style-plugin",
      "option": {
        "enable": false,
        "styles": ["./bulma.css"]
      }
    }
  ],
};
