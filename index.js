var fs = require("fs");

var endOfLine = require('os').EOL;      // hold EOL independent from OS
var buf = process.argv[2];              // get input array from node argument array 

fs.readFile(buf, function(error, data) {
    if (error) throw error;
    var res = data.toString('UTF8');
    console.log(res.split(endOfLine).length - 1);   
    
});

