const { readSubFilesFrom } = require('./cli-utils/readSubFilesFrom');
const { testFilesOnly } = require('./cli-utils/testFilesOnly');
const { outputDirContentOf } = require('./cli-utils/outputDirContentOf');

const path = require('path');

console.log(testFilesOnly(
    readSubFilesFrom(path.join(__dirname, './src'))
));

module.exports = {
    readSubFilesFrom,
    testFilesOnly,
    outputDirContentOf
};