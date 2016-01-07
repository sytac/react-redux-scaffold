'use strict';

module.exports = (gulp) => {
  return {
    watchExternalLibraries: {
      fn: watchExternalLibraries,
      help: 'Watches the external libraries for changes.'
    }
  };

  function watchExternalLibraries() {
    gulp
      .watch('./.tmp/_extLibs.json', ['build-libs'])
      .on('error', error => {
        console.error(error);
      });
  }
};
