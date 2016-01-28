'use strict';
const path = require('path');
const defaultsDeep = require('lodash.defaultsdeep');
const defaultValues = require('./default');

module.exports = () => defaultsDeep({}, defaultValues);
