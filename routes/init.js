var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('init/index', {user: req.user, title: 'visitor@linuxfingers:~/init$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/bibliography', function(req,res,next) {
	if (req.user){
		res.render('init/bibliography', {user: req.user, title: 'visitor@linuxfingers:~/init/bibliography$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/jen', function(req, res, next) {
	res.render('init/jen', {user: req.user, title: 'visitor@linuxfingers:~/init/jen$'});
});


router.get('/cv', function(req, res, next) {
		res.render('init/cv', {user: req.user, title: 'visitor@linuxfingers:~/init/cv$'});
});

router.get('/limitations', function(req,res,next) {
	if (req.user){
		res.render('init/limitations', {user: req.user, title: 'visitor@linuxfingers:~/init/limitations$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/rationale', function(req,res,next) {
	if (req.user){
		res.render('init/rationale', {user: req.user, title: 'visitor@linuxfingers:~/init/rationale$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/assessment', function(req,res,next) {
	if (req.user){
		res.render('init/assessment', {user: req.user, title: 'visitor@linuxfingers:~/init/self_assessment$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/provsec', function(req, res, next) {
		res.render('init/provsec', {user: req.user, title: 'visitor@linuxfingers:~/init/provsec$ '});
});





module.exports = router;
