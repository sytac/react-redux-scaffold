'use strict';
module.exports = (options) => {
  const newOptions = require('lodash').merge({
    'default': 'prod',
    prefix: 'APP_',
    targets: require('path').join(__dirname, './targets')
  }, options);

  return require('services-config')(newOptions);
};
