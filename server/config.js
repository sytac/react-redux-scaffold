'use strict';
const consolePrefix = require('console-prefix');

const platforms = require('../conf/platforms')({
  console: require('console-prefix')('[platforms-bootstrap]')
});

const options = {
  console: consolePrefix('[platforms]')
};

const config = platforms.current()(options);

console.log('-------------------------------------------------------------');
console.log('Great, as far as we can tell we have a valid config:', config.name);
console.log('Let\'s move on');
console.log('-------------------------------------------------------------');
module.exports = config;
