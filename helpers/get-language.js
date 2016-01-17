'use strict';

module.exports = function(req) {
  var languageString = req.headers['accept-language'];
  var language = languageString.match(/^[\w,-]+/)[0];
  return language;
};