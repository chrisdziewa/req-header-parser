'use strict';
const uaParser = require('ua-parser');


module.exports = function(req) {
  var info = uaParser.parse(req.headers['user-agent']);
  return info.os.toString();
};