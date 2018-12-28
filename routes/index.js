var express = require('express');
var router = express.Router();
var fetchResults=require('../Database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/users/add', function(req, res, next) {
  var newuser={
    user_name:req.body.name,
    user_email:req.body.email,
    user_password:req.body.password,
    user_phone:req.body.phone_number,
    user_status:1
  };
  fetchResults.insertUser(newuser,(result)=>{
    console.log("Inserted Succesfully!");
    res.render('signup');
  });
});

router.get('/adminhomepage', function(req, res, next) {
  fetchResults.getSubject((results)=>{
      res.render('AdminHomePage', { title: 'This is Admin Home Page',result:results });
    });
});

/* user page*/

router.get('/home', function(req, res, next) {
  res.render('UserHomePage', { title: 'Express' });
});
module.exports = router;