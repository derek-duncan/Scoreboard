var users = require('../controllers.js');
exports.index = function(req, res) {
  res.render('index', {
    title: 'Express'
  });
};

var redis = require("redis"),
  db = redis.createClient();

db.on("error", function(err) {
  console.log("Error " + err);
});

exports.game = function(req, res) {
  users.openPlayers(function(ps) {
    res.render('game', {
      title: 'Game',
      players: ps
    });
  });
};
exports.newPlayer = function(req, res) {
  users.openPlayers(function(ps) {
    res.render('newPlayer', {
      title: 'New Player',
      players: ps
    });
  });
};
exports.addPlayer = function(req, res) {
  var newPlayer = {};
  db.incr("global:nextUserId");
  db.get("global:nextUserId", function(err, obj) {
    var inc = obj;
    Math.floor(inc);
    console.log(inc);
    newPlayer.name = req.body['player-name'];
    newPlayer.id = inc;
    newPlayer.age = req.body['player-age'];
    newPlayer.height = req.body['player-height'];
    newPlayer.number = req.body['player-number'];
    newPlayer.weight = req.body['player-weight'];
    var params = {
      "id": newPlayer.id,
      "name": newPlayer.name,
      "age": newPlayer.age,
      "weight": newPlayer.weight,
      "height": newPlayer.height,
      "number": newPlayer.number
    };
    db.hset("players", newPlayer.id, JSON.stringify(params));
  });
  // db.hmset("Players", newPlayer.id, newPlayer.name);
  res.redirect('back');
};

Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};