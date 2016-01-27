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
    const depCaseVerify = require('dep-case-verify');

    const browserifyBundle =
      browserify('client/app.js', { debug: false })
        .transform(babelify)
        .plugin(depCaseVerify);

    if (config.build.uglify) {
      browserifyBundle.transform(config.build.uglify, uglifyify);
    }

    browserifyBundle.bundle()
      .pipe(vinylSourceStream('main.js'))
      .pipe(gulp.dest(config.folders.build))
      .on('end', done);
  }

  return tasks;
};
