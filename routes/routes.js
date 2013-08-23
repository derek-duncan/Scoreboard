exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

var redis = require("redis"),
  db = redis.createClient();

exports.player = function(req, res){
  var players = [];
  db.hgetall("Players", function(err, objs) {
    // Objects of Response
    for(var k in objs) {
      // Items are the individual key-value object
      var items = JSON.parse(objs[k]);
      var newPlayer = {};
      for(var x in items) {
        // x is the key for each object
        newPlayer[x] = items[x];
      }
      players.push(newPlayer);
    }
    res.render('player', {
      title: 'New Player List',
      players: players
    });
  });
};

exports.newPlayer = function(req, res){
  var newPlayer = {};
  newPlayer.name = req.body['player-name'];
  newPlayer.id = newPlayer.name.replace(' ', '-');
  newPlayer.age = req.body['player-age'];
  newPlayer.height = req.body['player-height'];
  newPlayer.number = req.body['player-number'];
  newPlayer.weight = req.body['player-weight'];
  var params = {"name": newPlayer.name, "age": newPlayer.age, "weight": newPlayer.weight, "height": newPlayer.height};
  console.log(JSON.stringify(params));
  db.hset("Players", newPlayer.id, JSON.stringify(params));
  // db.hmset("Players", newPlayer.id, newPlayer.name);
  res.redirect('back');
};