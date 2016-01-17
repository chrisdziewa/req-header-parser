'use strict';
const express = require('express');
const app = express();
const getIp = require('./helpers/get-ip');
const getSys = require('./helpers/get-system');
const getLang = require('./helpers/get-language');

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h4>Visit /api/whoami to view your information</h4>');
});

app.get('/api/whoami/', (req, res) => {
  console.log(req.headers);
  var message = {};
  getIp()
    .then( (ip) => {
      message.ip = ip;
      message.language = getLang(req);
      message.software = getSys(req);
      res.json(message);    
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});