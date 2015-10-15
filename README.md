# FreeCodeCamp

Your solution to FILTERED LS passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
    
────────────────────────────────────────────────────────────────────────────────