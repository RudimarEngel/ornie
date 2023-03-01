// require('app-module-path').addPath(`${__dirname}`);
const http = require('http');

global.config = require('./config.json');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World!');
  
});

server.listen(global.config.server.port, () => {
  console.log(`Servidor iniciou em http://${global.config.server.host}:${global.config.server.port}`)
})