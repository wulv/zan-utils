const path = require('path');
const esdoc = require('./esdoc');

module.exports = {
  src: path.join(__dirname, '../src'),
  esTemp: path.join(__dirname, '../es_temp'),
  dist: path.join(__dirname, '../dist'),
  esdoc
};
