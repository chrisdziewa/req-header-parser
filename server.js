'use strict';
const express = require('express');
const app = express();
const getIp = require('./helpers/get-ip');
const getSys = require('./helpers/get-system');

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/api/whoami/', (req, res) => {
  var message = {};
  getIp()
    .then( (ip) => {
      message.ip = ip;
      message.software = getSys(req);
      res.json(message);    
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});