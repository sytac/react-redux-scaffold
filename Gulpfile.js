var gulp = require('gulp');
var path = require('path');
var taskLoader = require('gulp-commonjs-tasks/task-loader');

const consolePrefix = require('console-prefix');
const platforms = require('./conf/platforms')({
  console: require('console-prefix')('[platforms-bootstrap]')
});
const services = require('./conf/services')({});
const options = {
  console: consolePrefix('[platforms]')
};
const currentServices = services.current('html');
const servicesObj = {};
Object.keys(currentServices).forEach(key => {
  servicesObj[key] = currentServices[key].service;
});
const config = require('lodash').merge(platforms.current()(options), { services: servicesObj });

// load tasks
var tasksContext = taskLoader.load('./tasks', gulp, config);

// Add the gulp help task
tasksContext.addHelpTask();
