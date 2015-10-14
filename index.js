var fs = require("fs");
var endOfLine = require('os').EOL;

var args = process.argv;

var content = fs.readFileSync(args[2]).toString();

var result = content.split(endOfLine).length - 1;

console.log(result);