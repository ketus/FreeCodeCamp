var endsWith = require("./helpers").endsWith;
var fs = require("fs");

var pathName = process.argv[2].toString();     
var extension = '.' + process.argv[3].toString();

fs.readdir(pathName, function(err, files) {
    if (err) {
        console.error(err);    
    } 
    //console.log('unfiltered files:\n' + files);
    var filesWithExt = files.filter(function (elem, i, arr) {
        return elem.toString().endsWith(extension);
    });
    
    //console.log('filtered files: \n' + filesWithExt);
    
    for (var el in filesWithExt) {
        console.log(filesWithExt[el]);
    }
});


