'use strict';
const path = require('path');

module.exports = {
  app: {
    name: 'Some application name',
    title: 'Some application title'
  },
  server: {
    port: 5000
  },
  folders: {
    build: path.join(__dirname, '../../../public')
  },
  build: {},
  services: {
    html: {
      links: [
        {
          rel: 'stylesheet',
          crossorigin: 'anonymous',
          href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
          integrity: 'sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7'
        },
        { rel: 'stylesheet', type: 'text/css', href: '/styles.css' }
      ],
      scripts: [
        { type: 'text/javascript', src: '/main.js' }
      ]
    }
  }
};
