'use strict';
const express = require('express');
const app = express();
let port= process.env.NODE_ENV || 3000;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/api/whoami/', (req, res) => {
  let header = req.headers;
  let userAgent = header['user-agent'].match(/\([\w\s\;]+\)/)[0];
  userAgent = userAgent.substring(1, userAgent.length - 1);
  console.log(req.headers);
  res.send(req.connection.remoteAddress);
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});