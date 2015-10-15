var files = require("./listFiles");

var pathName = process.argv[2].toString();
var extension = process.argv[3];

files(pathName, extension, function(err, data) {
    if (err) throw err;
    data.forEach(function(file) {
        console.log(file);
    })
});
