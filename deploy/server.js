const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3001;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || 'localhost';
var env = process.env.EPAAS_ENV || 'e0';

app.use(cors());
app.use('/', express.static(path.join(__dirname, '/')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.get('/healthCheck', function(req, res) {
  res.status(200).send('it works!');
});


if (env !== 'e0') {
  const https = require('https');

  var certificate = fs.readFileSync('/opt/epaas/certs/cert');
  var ca = fs.readFileSync('/opt/epaas/certs/ca');
  var privateKey = fs.readFileSync('/opt/epaas/certs/key');
  var pass = fs.readFileSync('/opt/epaas/certs/pass','ascii');

  var options = {
    key: privateKey,
    cert: certificate,
    ca: ca,
    passphrase: pass,
    requestCert: true,
    rejectUnauthorized: false
  };

  options.agent = new https.Agent(options);

  https.createServer(options, app).listen(port, ip);
  console.log('App listening on ' + ip + ':' + port + " for the env: " + env);
} else {
  app.listen(port, function () {
    console.log('App listening on ' + ip + ':' + port);
  });
}
