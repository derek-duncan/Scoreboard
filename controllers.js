var redis = require("redis"),
  db = redis.createClient();
exports.errors = function(err, req, res, next) {
  err.status = err.status || 500;
  err.message = err.message || 'Internal server error';
  err.code = err.code || 'INTERNAL_ERROR';

  console.log(new Error("Invalid user defined in module of errors by Derek Duncan!"));
};

function openPlayers(callback) {
  db.hgetall("players", function(err, objs) {
    var players = [];
    // Objects of Response
    for (var k in objs) {
      // Items are the individual key-value object
      var items = JSON.parse(objs[k]);
      players.push(items);
    }
    callback(players);
  });
}
module.exports.openPlayers = openPlayers;