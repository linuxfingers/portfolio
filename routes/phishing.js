var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('phishing/index', {user: req.user, title: 'visitor@linuxfingers:~/phishing$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/phishing/definitions', function(req,res,next) {
	if (req.user){
		res.render('phishing/definitions', {user: req.user, title: 'visitor@linuxfingers:~/phishing/technical_definitions$'});
	}
	else{
		res.redirect('signin');
	}
});

//Email Analyses//

router.get('/analysis', function(req,res,next) {
	if (req.user){
		res.render('phishing/analysis/index', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/analysis/bulk', function(req,res,next) {
	if (req.user){
		res.render('phishing/analysis/bulk', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis/bulk_phishing_analysis$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/analysis/clonephishing', function(req,res,next) {
	if (req.user){
		res.render('phishing/analysis/clonephishing', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis/clonephishing_analysis$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/analysis/malspam', function(req,res,next) {
	if (req.user){
		res.render('phishing/analysis/malspam', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis/malspam_analysis$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/analysis/pse', function(req,res,next) {
	if (req.user){
		res.render('phishing/analysis/pse', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis/pse_analysis$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/analysis/spearphishing', function(req,res,next) {
	if (req.user){
		res.render('phishing/analysis/spearphishing', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis/spearphishing_analysis$'});
	}
	else{
		res.redirect('signin');
	}
});

router.get('/analysis/corpus', function(req,res,next) {
	if (req.user){
		res.render('phishing/analysis/corpus', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis/email_corpus$'});
	}
	else{
		res.redirect('signin');
	}
});

module.exports = router;
