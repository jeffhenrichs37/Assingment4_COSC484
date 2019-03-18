var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString();
var lines = buffer.split('\n');

console.log("There are "+(lines.length-1)+" new lines in the "+process.argv[2]+" file.");