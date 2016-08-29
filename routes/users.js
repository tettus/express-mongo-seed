var express = require('express');
var router = express.Router();
var  User=require('./schema.js');
/* GET users listing. */
router.get('/list', function(req, res, next) {
	
	User.find(function(err,data){
		
		res.render('index',{ "users":data,"title":"User list"});
	});
  
});


/* GET users listing. */
router.post('/add', function(req, res, next) {
	new User(req.body).save(function(err,data){
		User.find(function(err,data){
			
			res.render('index',{ "users":data,"title":"User list"});
		});
		
	});
	
}); 

module.exports = router;
