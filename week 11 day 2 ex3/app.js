const fileManager = require('./fileManager');

const filePathToRead = 'HelloWorld.txt';
const filePathToWrite = 'ByeWorld.txt';
const newContent = 'Writing to the file';

const fileContent = fileManager.readFile(filePathToRead);
console.log('File content:', fileContent);

fileManager.writeFile(filePathToWrite, newContent);
