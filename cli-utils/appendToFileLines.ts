export { };

const fs = require('fs');

// arguments --> fileDirectory, data, line numbers (from start to finish), replaceLines to
// check if one should replace lines
// then reduce through the entire file fidn the start of the file dir and seeing.
// accumlator is a object wtih currentFileLines & toBeAdded, both arrays
// if the first line number is greater than or equal to line Numebr then:
// add the spilt array element in which the index is the file line index - first number.
// then add to the file if array if replaceLines is true.
// if replace lines is false.
// property push the item into the slot.
// then store teh false of the missing array part. in propety toBeAdded add items to the array.

// if toBeAdded.length is greater than 0 --> push element to the toBeAdded Array.
// if one wants a replacement, then have a flag to replace teh lines ratehr than adapt them.
// if line number is less than first line number then return as per usual.
// if line number is greater than last number return as per usual.

// if the element is the last array:
// push array to last element and then
// merge currentFile add on with toBeDded via [...currentFileLines, ...toBeAdded]

// write that new array joined to together by a new line to the file

function appendToFilesLines(
  fileDirectory: string,
  appendment: string,
  lineNumbers: number[],
  replaceLines: boolean,
): null {
  const pastFilesLines = fs.readFileSync(fileDirectory, 'utf8').split('\n');
  const appendmentsLines = appendment.split('\n');
  const [firstLineNumber, lastLineNumber] = [lineNumbers[0] - 1, lineNumbers[1] - 1];

  // console.log('start variables:', pastFilesLines,
  // appendmentsLines, firstLineNumber, lastLineNumber);

  const newFilesContent = pastFilesLines.reduce((
    accumulator: { currentFilelines: string[], toBeAdded: string[] },
    currentValue: string,
    index: number,
  ) => {
    const { currentFilelines, toBeAdded } = accumulator;

    // check that the lines are not in the appended line zone
    if (firstLineNumber <= index && lastLineNumber >= index) {
      appendmentsLines.forEach((line) => {
        const lastIndex = toBeAdded.length - 1;
        currentFilelines.push(line);
        if (replaceLines && toBeAdded[lastIndex] !== currentValue) {
          toBeAdded.push(currentValue);
        }
      });

      return accumulator;
    }

    // check toBeAdded is not triggered
    if (toBeAdded.length !== 0) {
      toBeAdded.push(currentValue);
      return accumulator;
    }

    // add files regardless
    currentFilelines.push(currentValue);

    return accumulator;
  }, { currentFilelines: [], toBeAdded: [] });

  const { currentFilelines, toBeAdded } = newFilesContent;
  const indexJsFile = [...currentFilelines, ...toBeAdded].join('\n');

  fs.writeFileSync(fileDirectory, indexJsFile);

  return null;
}

module.exports = { appendToFilesLines };
