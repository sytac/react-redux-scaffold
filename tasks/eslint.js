'use strict';

module.exports = (gulp) => {
  const tasks = {
    eslint: {
      fn: eslintTask,
      description: 'Run linting on the project sources.'
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
