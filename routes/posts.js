var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/app', function(req, res, next) {
  res.render('posts/app', {title: 'The Blog'});
});

module.exports = router;
