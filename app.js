var app = require('express')();
var server = require('http').Server(app);

server.listen(666);

app.get('/', function (req, res) {
  res.json({
      message: 'certo'
  });
});

require('./src/core/chatGlobal/chatGlobalSocket')(server);

