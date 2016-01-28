'use strict';
const defaultsDeep = require('lodash.defaultsdeep');
const defaultValues = require('./default');

module.exports = () => defaultsDeep({}, defaultValues, {
  build: {
    uglify: {
      global: true,
      sourcemap: false,
      mangle: true,
      compress: true
    }
  }
});
