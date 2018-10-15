const path = require('path');

module.exports = {
  src: path.join(__dirname, '../src'),
  esTemp: path.join(__dirname, '../es_temp'),
  dist: path.join(__dirname, '../dist'),
  static: ['README.md'],
};
