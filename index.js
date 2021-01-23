const jsonServer = require('json-server');
const db = require('./db.js');
const fs = require('fs');
const server = jsonServer.create();

fs.writeFileSync('/tmp/db.json', JSON.stringify(db()));


const router = jsonServer.router('/tmp/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, function() {
  console.log('JSON Server is running on http://localhost:' + port);
});
