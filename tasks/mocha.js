'use strict';

module.exports = (gulp) => {
  const tasks = {
    mocha: {
      fn: mochaTask,
      description: 'Run the unit test.'
    }
  };
  return tasks;

  function mochaTask(done) {
    const mocha = require('gulp-mocha-co');
    const babel = require('babel-register');

    gulp.src(['./tests/helpers/plugins.js',
        './client/**/test/*.spec.js',
        './server/**/test/*.spec.js',
        './tests/**/*.spec.js'
      ], { read: false })
      .pipe(
        mocha({
          reporter: 'spec',
          compilers: {
            js: babel
          }
        })
      )
      .on('end', done)
      .on('error', err => {
        console.log(err);
        done();
      });
  }
};
