var redis = require("redis"),
    db = redis.createClient();
exports.newPlayer = function(req, res){
    var newPlayer = {};
    newPlayer.name = req.body['player-name'];
    newPlayer.id = newPlayer.name.replace(' ', '-');
    newPlayer.age = req.body['player-name'];
    newPlayer.height = req.body['player-height'];
    newPlayer.weight = req.body['player-body'];

    db.hmset("Players", newPlayer.id, {"name": newPlayer.name, "age": newPlayer.age, "weight": newPlayer.weight, "height": newPlayer.height});
    res.render('newPlayer', { title: 'Player-Game' });
};