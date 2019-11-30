var express = require('express');
var router = express.Router();

//main offensive//

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('offensive/index', {user: req.user, title: 'visitor@rhetsec:~/offensive/readme$'});
	}
	else{
		res.redirect('/signin');
	}
});



//Email Analyses//

router.get('/phishing/analysis', function(req,res,next) {
	if (req.user){
		res.render('offensive/phishing/analysis/index', {user: req.user, title: 'visitor@rhetsec:~/phishing/analysis_info$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/phishing/analysis/bulk', function(req,res,next) {
	if (req.user){
		res.render('offensive/phishing/analysis/bulk', {user: req.user, title: 'visitor@rhetsec:~/phishing/bulk_phishing_analysis$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/phishing/analysis/clonephishing', function(req,res,next) {
	if (req.user){
		res.render('offensive/phishing/analysis/clonephishing', {user: req.user, title: 'visitor@rhetsec:~/phishing/clonephishing_analysis$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/phishing/analysis/malspam', function(req,res,next) {
	if (req.user){
		res.render('offensive/phishing/analysis/malspam', {user: req.user, title: 'visitor@rhetsec:~/phishing/malspam_analysis$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/phishing/analysis/pse', function(req,res,next) {
	if (req.user){
		res.render('offensive/phishing/analysis/pse', {user: req.user, title: 'visitor@rhetsec:~/phishing/pse_analysis$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/phishing/analysis/spearphishing', function(req,res,next) {
	if (req.user){
		res.render('offensive/phishing/analysis/spearphishing', {user: req.user, title: 'visitor@rhetsec:~/phishing/spearphishing_analysis$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/phishing/analysis/corpus', function(req,res,next) {
	if (req.user){
		res.render('offensive/phishing/analysis/corpus', {user: req.user, title: 'visitor@rhetsec:~/phishing/email_corpus$'});
	}
	else{
		res.redirect('/signin');
	}
});


module.exports = router;
