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
    ],
    description: 'Build the sources and run the watcher with hot reload features.'
  }
});
