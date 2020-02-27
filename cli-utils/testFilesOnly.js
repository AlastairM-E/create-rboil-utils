function testFilesOnly(dir) {
     return dir.reduce((accumulator, file, index) => {

        if (typeof file === 'object' && file !== Array) {
           accumulator.push({ 
               directory : file.directory, 
               subFiles : testFilesOnly(file.subFiles)
            });
        } else if (file.match(/.*\.test\.js/)) {
            accumulator.push(file);
        };

        return accumulator;
    }, []);
};

module.exports = {
    testFilesOnly
};