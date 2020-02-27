const { readSubFilesFrom } = require('./cli-utils/readSubFilesFrom');
const { testFilesOnly } = require('./cli-utils/testFilesOnly');
const { outputDirContentOf } = require('./cli-utils/outputDirContentOf');

module.exports = {
    readSubFilesFrom,
    testFilesOnly,
    outputDirContentOf
};