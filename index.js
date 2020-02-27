const { readSubFilesFrom } = require('./cli-utils/readSubFilesFrom');
const { testFilesOnly } = require('./cli-utils/testFilesOnly');
const { outputDirContentOf } = require('./cli-utils/outputDirContentOf');

const path = require('path');
const process = require('process');

const testFiles = testFilesOnly(
    readSubFilesFrom(path.join(__dirname, '/src'))
);

outputDirContentOf(testFiles, `${process.cwd()}/src`, `${process.cwd()}/test`);

module.exports = {
    readSubFilesFrom,
    testFilesOnly,
    outputDirContentOf
};