'use strict';

module.exports = () => {
  return {
    watch: {
      seq: [
        'build',
        [
          'watchClient',
          'watchExternalLibraries',
          'watchPackageJSON',
          'watchBrowserify'
        ]
      ]
    }
  };
};
