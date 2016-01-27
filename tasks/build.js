'use strict';

module.exports = () => {
  const tasks = {
    build: {
      seq: [
        'css',
        'build-src',
        'copy-html'
      ]
    }
  };
  return tasks;
};
