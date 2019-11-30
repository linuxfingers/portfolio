var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('init/theproject', {user: req.user, title: 'visitor@rhetsec:~/portfolio/the_project$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/rhet101', function(req,res,next) {
	if (req.user){
		res.render('init/rhet101', {user: req.user, title: 'visitor@rhetsec:~/portfolio/rhetoric_101$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/bibliography', function(req,res,next) {
	if (req.user){
		res.render('init/bibliography', {user: req.user, title: 'visitor@rhetsec:~/portfolio/bibliography$'});
	}
	else{
		res.redirect('/signin');
	}
});

module.exports = router;
