var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');

router.get('/', function(req, res, next) {
  var posts = null;
  res.render('posts/index', { title: 'The Blog', posts: posts });
});

router.get('/app', function(req, res, next) {
  res.render('posts/app', {title: 'The Blog'});
});

router.get('/view/:slug', function(req, res, next) {
  var post = null;
  res.render('posts/view', { title: 'The Blog', post: post });
});

module.exports = router;
