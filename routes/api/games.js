var express = require('express');
var router = express.Router();

var Games = require('../../models/games');

router.get('/', function(req, res, next) {
  Games.find({}, null, {sort: '-created'}, function(err, games){
    if(err){
     return res.json({'success':false, 'error': err});
   }
    return res.json({'success':true, 'games': games});
  });
});

router.get('/:id', function(req,res){
  var id = req.params.id;
  Games.findOne({'_id':id}, function(err, game){
    if(err){
      return res.json({'success':false, 'error': err});
    }
      return res.json({'success':true, 'game': game});
  });
});

router.get('/join/:type', function(req,res){
  var type = req.params.type;
  Games.find({'type':type}, null, {sort: '-published'}, function(err, games){
    if(err){
      return res.json({'success':false, 'error': err});
    }
      return res.json({'success':true, 'games': games});
    });
  });

router.post('/', function(req, res) {
  Games.create(new Games({
    gameType: req.body.gameType,
    name: req.body.name,
    shoes: req.body.shoes,
    players: req.body.players,
    type: req.body.type,
    protected: req.body.protected,
    password: req.body.password,
    pot: req.body.pot
  }), function(err, game){

    if(err){
      return res.json({success: false, game: req.body, error: err});
    } else {
      return res.json({success: true, game: game});
    }
  });
});

/* router.put('/', function(req, res){

  Games.findOne({'_id': req.body._id}, function(err, game){

  if(err) {
    return res.json({success: false, error: err});
  }else if(game) {

    let data = req.body;

    if(data.title){
      post.title = data.title;
    }

    if(data.description){
    post.description = data.description;
    }

    if(data.keywords){
    post.keywords = data.keywords;
    }

    if(data.body){
    post.body = data.body;
    }

    if(data.published){
      post.published = data.published;
      post.offset = new Date(data.published).getTimezoneOffset();
    }

    game.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        return res.json({success: true, game:game});
      }
    });

   }

  });

});*/

router.delete('/:id', function(req,res){

  var id = req.params.id;

  Games.remove({'_id':id}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});

module.exports = router;
