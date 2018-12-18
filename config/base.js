const path = require('path');

module.exports = {
  src: path.join(__dirname, '../src'),
  config: path.join(__dirname, '../config'),
  template: path.join(__dirname, '../template'),
  esTemp: path.join(__dirname, '../es_temp'),
  dist: path.join(__dirname, '../dist'),
  publishCache: path.join(__dirname, '../.publish'),
  static: ['README.md'],
};
