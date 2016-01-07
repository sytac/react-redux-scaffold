'use strict';
module.exports = (options) => {
  const newOptions = require('lodash/object/merge')({
    'default': 'prod',
    prefix: 'APP_',
    targets: require('path').join(__dirname, './targets')
  }, options);

  return require('services-config')(newOptions);
};
