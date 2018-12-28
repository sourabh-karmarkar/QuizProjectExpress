var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* user page*/

router.get('/home', function(req, res, next) {
  res.render('UserHomePage', { title: 'Express' });
});
module.exports = router;
