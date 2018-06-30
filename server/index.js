// require('dotenv').config();
require('newrelic');
// const spdy = require('spdy');
// const fs = require('fs')
const app = require('./application');

const cluster = require( 'cluster' );
const cCPUs   = require( 'os' ).cpus().length;

const port = process.env.PORT || 3003;

if (cluster.isMaster) {
  for (var i = 0; i < cCPUs; i++) {
    cluster.fork();
  }
  cluster.on('online', function (worker) {
    console.log('Worker ' + worker.process.pid + ' is online.');
  });
  cluster.on('exit', function (worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died.');
  });
}
else {
  app.listen(port, () => console.log(`Overview module listening on port ${port}`));
}

// eyes.inspect( process.env );
// const options = {
//   key: fs.readFileSync(__dirname + '/http2-express/server.key'),
//   cert:  fs.readFileSync(__dirname + '/http2-express/server.crt'),
//   rejectUnauthorized: false,
// }

// spdy
//   .createServer(options, app)
//   .listen(port, (error) => {
//     if (error) {
//       console.error(error)
//       return process.exit(1)
//     } else {
//       console.log('Listening on port: ' + port + '.')
//     }
//   });
