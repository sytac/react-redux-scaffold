'use strict';

var defaultsDeep = require('lodash.defaultsdeep');
var defaultValues = {
  links: [
    {
      rel: 'stylesheet',
      crossorigin: 'anonymous',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
      integrity: 'sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7'
    },
    {rel: 'stylesheet', type: 'text/css', href: '/styles.css'}
  ],
  scripts: [
    {type: 'text/javascript', src: '/libs.js'},
    {type: 'text/javascript', src: '/main.js'}
  ]
};

module.exports = function(options) {
  var service = {
    prod: defaultsDeep({}, defaultValues)
  };

  return service;
};
