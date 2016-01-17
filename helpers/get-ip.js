'use strict';
const request = require('request');
let url = 'http://ipinfo.io';

module.exports = function() {
  return new Promise((resolve, reject) => {
    request({ 
      url: url,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        resolve(body.ip);
      }
      else {
        reject(error);
      }
    });
  });
};
