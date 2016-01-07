'use strict';

module.exports = (gulp) => {
  const tasks = {
    eslint: {
      fn: eslintTask,
      help: 'Check the syntax of the code'
    }
  };

  return tasks;

  function eslintTask() {
    const eslint = require('gulp-eslint');
    return gulp.src(['client/**/*.js', 'tasks/**/*.js', 'server/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format());
  }
};
