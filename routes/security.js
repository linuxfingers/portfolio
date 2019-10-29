var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('security/index', {user: req.user, title: 'visitor@linuxfingers:~/security$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/SAT/analysis', function(req,res,next) {
	if (req.user){
		res.render('security/SAT/analysis', {user: req.user, title: 'visitor@linuxfingers:~/security/analysis$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/SAT/parts', function(req,res,next) {
	if (req.user){
		res.render('security/SAT/parts', {user: req.user, title: 'visitor@linuxfingers:~/security/parts_of_SAT$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/SAT/skb', function(req,res,next) {
	if (req.user){
		res.render('security/SAT/skb', {user: req.user, title: 'visitor@linuxfingers:~/security/SANS&&KnowBe4$'});
	}
	else{
		res.redirect('signin');
	}
});

module.exports = router;
