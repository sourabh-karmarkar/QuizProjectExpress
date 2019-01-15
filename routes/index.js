var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var fetchSubject = require('../Database');
=======
var fetchResults=require('../Database');
>>>>>>> fccda74fc8c9c9583efb90d00c55a32e847bc8e2

/* GET home page. */
router.get('/getQuestion', (req, res) => {
  if (req.query.sub) {
    fetchSubject.fetchDocs(req.query.sub, (result) => {
      console.log(result);
      res.send(JSON.stringify(result));
    });
  }
})
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});
<<<<<<< HEAD
router.get('/signup.ejs', function (req, res, next) {
  res.render('signup', { title: 'Express' });
});
router.get('/login.ejs', function (req, res, next) {
=======
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/login', function(req, res, next) {
>>>>>>> fccda74fc8c9c9583efb90d00c55a32e847bc8e2
  res.render('login', { title: 'Express' });
});
// router.get('/Quiz_Questions.ejs', function(req, res, next) {
//   res.render('Quiz_Questions', { title: 'Express' });
// });

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

<<<<<<< HEAD
router.get('/adminhomepage', function (req, res, next) {
  fetchSubject.getSubject((results) => {
    res.render('AdminHomePage', { title: 'This is Admin Home Page', result: results });
  });
=======
router.get('/adminhomepage', function(req, res, next) {
  fetchResults.getSubject((results)=>{
      res.render('AdminHomePage', { title: 'This is Admin Home Page',result:results });
    });
>>>>>>> fccda74fc8c9c9583efb90d00c55a32e847bc8e2
});

/* user page*/

router.get('/home', function (req, res, next) {
  res.render('UserHomePage', { title: 'Express' });

});

module.exports = router;