// require('app-module-path').addPath(`${__dirname}`);
const http = require('http');
const Router = require('./system/router')

global.config = require('./config.json');

const server = http.createServer(function(req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'})
  // res.end('Hello World!');

  res.setHeader( 'Access-Control-Allow-Origin', '*');
  res.setHeader( 'Access-Control-Request-Method', '*');
  res.setHeader( 'Access-Control-Allow-Methods', '*');
  res.setHeader( 'Access-Control-Allow-Headers', '*');
  
  // console.log('req.method:', req.method)

  // console.log(`__dirname: `, __dirname)
  // console.log('global:', global)

  Router.run(req, res);

});

server.listen(global.config.server.port, () => {
  console.log(`Servidor iniciou em http://${global.config.server.host}:${global.config.server.port}`)
})