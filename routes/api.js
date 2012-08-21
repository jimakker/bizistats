/*
 * Serve JSON to our AngularJS client
 */
var app = require('../server');
exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.current = function (req, res) {
  res.json({
  	current: app.statsArray[app.statsArray.length-1]
  });
};

exports.stats = function (req, res) {
  res.json({
  	stats: app.statsArray
  });
};


exports.five = function (req, res) {
  res.json({
  	five: app.statsArray.slice(app.statsArray.length-6,app.statsArray.length-1)
  });
};