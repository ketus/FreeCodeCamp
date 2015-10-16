var net = require("net");
var port = process.argv[2];

var pad = function(el) {
  return el < 10 ? '0' + el : el;
}

var server = net.createServer(function(socket){
  var d = new Date();
  var s = d.getFullYear() + "-"
          + pad(d.getMonth() + 1) + "-"
          + pad(d.getDate()) + " "
          + pad(d.getHours()) + ":"
          + pad(d.getMinutes()) + "\n";
  socket.end(s);
});



server.listen(port);