'use strict';

module.exports = () => ({
  watch: {
    seq: [
      'build',
      [
        'watchClient',
        'watchPackageJSON',
        'watchBrowserify'
      ]
    ]
  }
});
