const fs = require('fs');

const directoryPath = '.'; // Current directory

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    console.log('Files in directory:', files);
  }
});
