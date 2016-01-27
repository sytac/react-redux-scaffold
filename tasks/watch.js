'use strict';

module.exports = () => ({
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
});
