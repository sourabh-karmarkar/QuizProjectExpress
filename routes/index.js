var express = require('express');
var router = express.Router();
var fetchSubject=require('../Database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/signup.ejs', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});
router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Express' });
});



router.get('/adminhomepage', function(req, res, next) {
    fetchSubject.getSubject((results)=>{
      res.render('AdminHomePage', { title: 'This is Admin Home Page',result:results });
    });
});

/* user page*/

router.get('/home', function(req, res, next) {
  res.render('UserHomePage', { title: 'Express' });

});

module.exports = router;