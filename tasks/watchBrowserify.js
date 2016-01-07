'use strict';

module.exports = (gulp, config) => {
  return {
    watchBrowserify: {
      fn: watchBrowserify,
      help: 'Watches the browserify build.'
    }
  };

  function watchBrowserify() {
    const babelify = require('babelify');
    const browserify = require('browserify');
    const browserifyHMR = require('browserify-hmr');
    const uglifyify = require('uglifyify');
    const vinylSourceStream = require('vinyl-source-stream');
    const watchify = require('watchify');
    const gutil = require('gulp-util');

    const commonBrowserify = require('./common/browserify');

    const browserifyBundle = browserify('client/app.js', {
      cache: {},
      packageCache: {},
      debug: false
    });

    // Transforms
    browserifyBundle.transform(babelify);
    browserifyBundle.transform(commonBrowserify.getImportFilter(browserifyBundle));

    if (config.uglify) {
      browserifyBundle.transform(config.uglify, uglifyify);
    }

    // Plugins
    browserifyBundle.plugin(browserifyHMR);
    browserifyBundle.plugin(watchify);

    function bundle() {
      commonBrowserify.getExternalLibsSync();

      browserifyBundle.bundle()
        .pipe(vinylSourceStream('main.js'))
        .pipe(gulp.dest(config.folders.build))
        .on('end', error => {
          if (error) {
            console.error(error);
          }

          commonBrowserify.setExternalLibsSync();
        });
    }

    browserifyBundle
      .on('log', (message) => {
        gutil.log('browserify', message);
      });

    browserifyBundle
      .on('update', bundle);

    bundle();
  }
};
