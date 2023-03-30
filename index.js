// require('app-module-path').addPath(`${__dirname}`);
const http = require('http');
const Router = require('./system/router')

global.config = require('./config.json');

const server = http.createServer(function(req, res) {

  res.setHeader( 'Access-Control-Allow-Origin', '*');
  res.setHeader( 'Access-Control-Request-Method', '*');
  res.setHeader( 'Access-Control-Allow-Methods', '*');
  res.setHeader( 'Access-Control-Allow-Headers', '*');
  
  
  Router.run(req, res);

});

server.listen(global.config.server.port, () => {
  console.log(`Server started on http://${global.config.server.host}:${global.config.server.port}`)
})