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
    const depCaseVerify = require('dep-case-verify');

    const browserifyBundle = browserify('client/app.js', {
      cache: {},
      packageCache: {},
      debug: true
    });

    // Transforms
    browserifyBundle.transform(babelify);

    if (config.uglify) {
      browserifyBundle.transform(config.uglify, uglifyify);
    }

    // Plugins
    browserifyBundle.plugin(depCaseVerify);
    browserifyBundle.plugin(browserifyHMR);
    browserifyBundle.plugin(watchify);

    function bundle() {
      browserifyBundle.bundle()
        .pipe(vinylSourceStream('main.js'))
        .pipe(gulp.dest(config.folders.build))
        .on('end', error => {
          if (error) {
            console.error(error);
          }
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
