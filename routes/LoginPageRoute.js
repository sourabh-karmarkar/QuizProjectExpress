var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('LoginPage', { title: 'This Is Login Page' });
});

module.exports = router;
