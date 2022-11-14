const fs = require('fs');

// 1. get the json data
// This is string data
const fileData = fs.readFileSync('version.json', 'utf8');
// Use JSON.parse to convert string to JSON Object
const jsonData = JSON.parse(fileData);

process.argv.forEach(function (val, index, array) {
  // 2. update the value of one key
  jsonData['version'] = array[2];
  // 3. write it back to your json file
  fs.writeFile('version.json', JSON.stringify(jsonData), () => {});
});
