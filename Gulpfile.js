'use strict';

const gulp = require('gulp');
const taskLoader = require('gulp-commonjs-tasks/task-loader');

const consolePrefix = require('console-prefix');
const platforms = require('./conf/platforms')({
  console: require('console-prefix')('[platforms-bootstrap]')
});
const options = {
  console: consolePrefix('[platforms]')
};
const config = platforms.current()(options);

// load tasks
const tasksContext = taskLoader.load('./tasks', gulp, config);

// Add the gulp help task
tasksContext.addHelpTask();
