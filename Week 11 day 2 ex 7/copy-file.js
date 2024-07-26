const fs = require('fs');

const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

try {
  const data = fs.readFileSync(sourceFile, 'utf8');
  fs.writeFileSync(destinationFile, data);
  console.log('File copied successfully');
} catch (err) {
  console.error('Error copying file:', err);
}
