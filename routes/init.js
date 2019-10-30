var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('init/theproject', {user: req.user, title: 'visitor@linuxfingers:~/init$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/audience', function(req,res,next) {
	if (req.user){
		res.render('init/audience', {user: req.user, title: 'visitor@linuxfingers:~/init/rationale$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/bibliography', function(req,res,next) {
	if (req.user){
		res.render('init/bibliography', {user: req.user, title: 'visitor@linuxfingers:~/init/bibliography$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/cv', function(req, res, next) {
	res.render('init/cv', {user: req.user, title: 'visitor@linuxfingers:~/init/cv$'});
});

router.get('/jen', function(req, res, next) {
	res.render('init/jen', {user: req.user, title: 'visitor@linuxfingers:~/init/jen$'});
});

router.get('/provsec', function(req, res, next) {
	res.render('init/provsec', {user: req.user, title: 'visitor@linuxfingers:~/init/provsec$ '});
});

router.get('/why', function(req,res,next) {
	if (req.user){
		res.render('init/why', {user: req.user, title: 'visitor@linuxfingers:~/init/limitations$'});
	}
	else{
		res.redirect('/signin');
	}
});

module.exports = router;
