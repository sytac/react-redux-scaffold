'use strict';

module.exports = () => {
  const tasks = {
    build: {
      seq: [
        'css',
        'build-src',
        'build-libs',
        'copy-html'
      ]
    }
  };
  return tasks;
};
