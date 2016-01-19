'use strict';
const path = require('path');
module.exports = () => {
  return {
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
    build: {
    }
  };
};
