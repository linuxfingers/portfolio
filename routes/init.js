var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('init/theproject', {user: req.user, title: 'visitor@rhetsec:~/portfolio/theproject$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/rhet101', function(req,res,next) {
	if (req.user){
		res.render('init/rhet101', {user: req.user, title: 'visitor@rhetsec:~/init/who is this for$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/audience', function(req,res,next) {
	if (req.user){
		res.render('init/audience', {user: req.user, title: 'visitor@rhetsec:~/init/who is this for$'});
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

router.get('/cv', function(req, res, next) {
	res.render('init/cv', {user: req.user, title: 'visitor@rhetsec:~/init/cv$'});
});

router.get('/jen', function(req, res, next) {
	res.render('init/jen', {user: req.user, title: 'visitor@rhetsec:~/init/jen$'});
});

router.get('/provsec', function(req, res, next) {
	res.render('init/provsec', {user: req.user, title: 'visitor@rhetsec:~/init/provsec$ '});
});

router.get('/why', function(req,res,next) {
	if (req.user){
		res.render('init/why', {user: req.user, title: 'visitor@rhetsec:~/init/why$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/definitions', function(req,res,next) {
	if (req.user){
		res.render('definitions', {user: req.user, title: 'visitor@rhetsec:~/init/definitions$'});
	}
	else{
		res.redirect('/signin');
	}
});

module.exports = router;
