export {};

const fs = require('fs');

function readSubFilesFrom(targetDirectory: string) {
  return fs.readdirSync(targetDirectory)
    .map((file: string) => {
      if (file.match(/^.*\..*$/)) {
        return file;
      }

      return {
        directory: file,
        subFiles: readSubFilesFrom(`${targetDirectory}/${file}`),
      };
    });
}

module.exports = {
  readSubFilesFrom,
};
