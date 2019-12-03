var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('defensive/index', {user: req.user, title: 'visitor@linuxfingers:~/defensive/readme$'});
	}
	else{
		res.redirect('/signin');
	}
});

//sat//

router.get('/sat', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/index', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/readme$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat/culture', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/culture', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/culture$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat/quizzes', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/quizzes', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/quizzes$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat/reporting', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/reporting', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/reporting$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat/phishsim', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/phishsim', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/phishing_sim$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat/seminars', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/seminars', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/seminars$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat/sq', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/sq', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/sq$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat/videos', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/videos', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/videos$'});
	}
	else{
		res.redirect('/signin');
	}
});

module.exports = router;
