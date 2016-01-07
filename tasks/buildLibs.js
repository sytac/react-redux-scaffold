'use strict';

module.exports = (gulp, config) => {
  return {
    'build-libs': {
      fn: buildLibs,
      help: 'Build source help'
    }
  };

  function buildLibs(done) {
    const fs = require('fs');
    const path = require('path');
    const browserify = require('browserify');
    const source = require('vinyl-source-stream');
    const uglifyify = require('uglifyify');

    const libFile = path.join(__dirname, '../.tmp/_extLibs.json');
    let externalLibs;
    if (fs.existsSync(libFile)) {
      externalLibs = JSON.parse(fs.readFileSync(libFile));
    } else {
      return done('No lib file found');
    }

    const b = browserify();
    b.transform({
      global: true
    });
    if (config.uglify) {
      b.transform(config.uglify, uglifyify);
    }

    externalLibs.map(dep => {
      if (dep === 'react') {
        b.require('react/addons');
      }
      b.require(dep);
    });

    return b.bundle()
      .on('error', err => {
        console.log('err', err);
      })
      .pipe(source('libs.js'))
      .pipe(gulp.dest(config.folders.build));
  }
};
