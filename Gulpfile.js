var gulp = require('gulp');
var path = require('path');
var taskLoader = require('gulp-commonjs-tasks/task-loader');

var config = {
  folders: {
    build: path.join(__dirname, '/public')
  },
  //uglify: {
  //  global: true,
  //  sourcemap: false,
  //  mangle: true,
  //  compress: true
  //}
};
// load tasks
var tasksContext = taskLoader.load('./tasks', gulp, config);

// Add the gulp help task
tasksContext.addHelpTask();
