'use strict';
const consolePrefix = require('console-prefix');

const platforms = require('../conf/platforms')({
  console: require('console-prefix')('[platforms-bootstrap]')
});
const services = require('../conf/services')({});

const options = {
  console: consolePrefix('[platforms]')
};

// Set the config entry from the folder /conf/services/targets
const currentServices = services.current('html');
const servicesObj = {};
Object.keys(currentServices).forEach(key => {
  servicesObj[key] = currentServices[key].service;
});

const config = require('lodash').merge(platforms.current()(options), { services: servicesObj });

console.log('-------------------------------------------------------------');
console.log('Great, as far as we can tell we have a valid config:', config.name);
console.log('Let\'s move on');
console.log('-------------------------------------------------------------');
module.exports = config;
