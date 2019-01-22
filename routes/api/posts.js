var express = require('express');
var router = express.Router();

var Posts = require('../../models/posts');

router.get('/', function(req, res, next) {
  Posts.find({}, null, {sort: 'title'}, function(err, posts){
    if(err){
     return res.json({'success':false, 'error': err});
   }
    return res.json({'success':true, 'posts': posts});
  });
});

router.get('/:postId', function(req,res){
  var postId = req.params.postId;
  Posts.findOne({'_id':postId}, function(err, user){
    if(err){
      return res.json({'success':false, 'error': err});
    }
      return res.json({'success':true, 'user': user});
  });
});

router.post('/', function(req, res) {
  Posts.create(new Posts({
    title: req.body.title,
    description: req.body.description,
    keywords: req.body.keywords,
    body: req.body.body
  }), function(err, post){

    if(err){
      return res.json({success: false, post: req.body, error: err});
    }

    return res.json({success: true, post: post});

  });
});

router.put('/', function(req, res){

  Posts.findOne({'_id': req.body._id}, function(err, post){

  if(err) {
    return res.json({success: false, error: err});
  }else if(post) {

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

    post.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        return res.json({success: true, post:post});
      }
    });

   }

  });

});

router.delete('/:postId', function(req,res){

  var postId = req.params.postId;

  Posts.remove({'_id':postId}, function(err,removed){

    if(err){
      return res.json({success: false, error: err});
    }

    return res.json({success: true, status: removed});

  });

});

module.exports = router;