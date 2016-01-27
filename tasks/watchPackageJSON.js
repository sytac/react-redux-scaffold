'use strict';

module.exports = (gulp) => {
  return {
    watchPackageJSON: {
      fn: watchPackageJSON,
      help: 'Watches the package.json for changes.'
    }
  };

  function watchPackageJSON() {
    gulp
      .watch('./package.json', event => {
        console.log(`File ${event.path} was ${event.type}, running tasks...`);
      })
      .on('error', error => {
        console.error(error);
      });
  }
};
