var express = require('express');
var router = express.Router();
var fetchSubject=require('../Database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/adminhomepage', function(req, res, next) {
    fetchSubject.getSubject((results)=>{
      res.render('AdminHomePage', { title: 'This is Admin Home Page',result:results });
    });
});

module.exports=router;