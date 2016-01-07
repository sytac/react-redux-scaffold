'use strict';

const fs = require('fs');
const path = require('path');

const transformTools = require('browserify-transform-tools');

const dependencies = require('../../package.json').dependencies;
const temporaryDirectoryPath = path.join(__dirname, '../../.tmp');
const libraryFilePath = path.join(temporaryDirectoryPath, '_extLibs.json');
const externalModules = [];
let externalLibs;

function getImportFilter(result) {
  return transformTools.makeRequireTransform(
    'requireTransform',
    { includeExtensions: ['.js'] },
    (args, opts, cb) => {
      const moduleName = args[0];

      if (moduleName.substr(0, 1) === '.') {
        return cb();
      }
      if (Object.keys(dependencies).indexOf(moduleName.split('/', 1)[0]) !== -1) {
        if (externalModules.indexOf(moduleName) === -1) {
          externalModules.push(moduleName);
          result.external(moduleName);
        }
        return cb();
      }
      return cb();
    }
  );
}

function getExternalLibsSync() {
  if (!fs.existsSync(temporaryDirectoryPath)) {
    fs.mkdirSync(temporaryDirectoryPath);
  }

  if (fs.existsSync(libraryFilePath)) {
    externalLibs = JSON.parse(fs.readFileSync(libraryFilePath));
  } else {
    externalLibs = [];
  }
}

function setExternalLibsSync() {
  const newContent = JSON.stringify(externalModules.sort(), null, 2);
  const oldContent = JSON.stringify(externalLibs.sort(), null, 2);

  if (newContent !== oldContent) {
    fs.writeFileSync(path.join(temporaryDirectoryPath, '_extLibs.json'), newContent);
  }
}

module.exports = {
  getImportFilter,
  getExternalLibsSync,
  setExternalLibsSync
};
