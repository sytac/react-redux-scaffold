'use strict';

module.exports = (gulp, config) => {
  const tasks = {
    'build-src': {
      fn: buildSrcTask,
      help: 'Build the src of the project'
    }
  };

  function buildSrcTask(done) {
    const browserify = require('browserify');
    const babelify = require('babelify');
    const uglifyify = require('uglifyify');
    const vinylSourceStream = require('vinyl-source-stream');

    const commonBrowserify = require('./common/browserify');

    const browserifyBundle = browserify('client/app.js', { debug: false })
      .transform(babelify);

    browserifyBundle.transform(commonBrowserify.getImportFilter(browserifyBundle));

    if (config.uglify) {
      browserifyBundle.transform(config.uglify, uglifyify);
    }

    commonBrowserify.getExternalLibsSync();

    browserifyBundle.bundle()
      .pipe(vinylSourceStream('main.js'))
      .pipe(gulp.dest(config.folders.build))
      .on('end', err => {
        commonBrowserify.setExternalLibsSync();

        if (err) {
          done(err);
        } else {
          done();
        }
      });
  }

  return tasks;
};
