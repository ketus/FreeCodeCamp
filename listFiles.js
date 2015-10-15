var fs = require("fs");
var path = require("path");
var filesWithExt = [];

module.exports = function listFiles(pathName, extension, callback){
    
    fs.readdir(pathName, function(err, files) {
        if (err) {
            return callback(err);    
        } 
        
        filesWithExt = files.filter(function (fileName) {
          return path.extname(fileName) === ('.' + extension);
        });
        
        return callback(null, filesWithExt);
    });
};

