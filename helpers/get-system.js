'use strict';

module.exports = function(req) {
  let header = req.headers;
  let userAgent = header['user-agent'].match(/\([\w\s\;]+\)/)[0];
  return userAgent.substring(1, userAgent.length - 1);
};