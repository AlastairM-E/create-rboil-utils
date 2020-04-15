const { readSubFilesFrom } = require('./build/readSubFilesFrom');
const { testFilesOnly } = require('./build/testFilesOnly');
const { outputDirContentOf } = require('./build/outputDirContentOf');
const appendToFileLines = require('./build/appendToFileLines');

module.exports = {
  readSubFilesFrom,
  testFilesOnly,
  outputDirContentOf,
  appendToFileLines,
};
