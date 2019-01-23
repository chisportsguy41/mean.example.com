var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');

router.get('/', function(req, res, next) {
  Posts.find({published: { '$lte': new Date().toISOString() }}, null, {sort: '-published'}, function(err, posts){
    if(err){
      return res.render('/error', {'error': err});
    } else {
      return res.render('posts/index',
      { title: 'The Blog', description: 'This is a blog.', keywords: 'keywords, blog', 'posts': posts});
    }
  });
});

router.get('/app', function(req, res, next) {
  res.render('posts/app', {title: 'The Backend'});
});

router.get('/view/:slug', function(req, res, next) {
  var slug = req.params.slug;
  Posts.findOne({'slug':slug}, function(err, post){
    if(err){
      return res.render('/error', {'error': err});
    } else {
      return res.render('posts/view',
      { title: post.title, description: post.description, keywords: post.keywords, 'post': post});
    }
  });
});

module.exports = router;
