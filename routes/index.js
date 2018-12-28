var express = require('express');
var router = express.Router();
var path=require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

exports.router.get('/adminhomepage', function(req, res, next) {
    res.render('AdminHomePage', { title: 'This is Admin Home Page' });
});
