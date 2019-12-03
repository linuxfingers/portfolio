var express = require('express');
var router = express.Router();

//main offensive//

router.get('/', function(req,res,next) {
		res.render('offensive/index', {user: req.user, title: 'visitor@linuxfingers:~/offensive/readme$'});
});



//Email Analyses//

router.get('/phishing/analysis', function(req,res,next) {
		res.render('offensive/phishing/analysis/index', {user: req.user, title: 'visitor@linuxfingers:~/phishing/analysis_info$'});
});

router.get('/phishing/analysis/bulk', function(req,res,next) {
		res.render('offensive/phishing/analysis/bulk', {user: req.user, title: 'visitor@linuxfingers:~/phishing/bulk_phishing_analysis$'});
});

router.get('/phishing/analysis/clonephishing', function(req,res,next) {
		res.render('offensive/phishing/analysis/clonephishing', {user: req.user, title: 'visitor@linuxfingers:~/phishing/clonephishing_analysis$'});
});

router.get('/phishing/analysis/malspam', function(req,res,next) {
		res.render('offensive/phishing/analysis/malspam', {user: req.user, title: 'visitor@linuxfingers:~/phishing/malspam_analysis$'});
});

router.get('/phishing/analysis/pse', function(req,res,next) {
		res.render('offensive/phishing/analysis/pse', {user: req.user, title: 'visitor@linuxfingers:~/phishing/pse_analysis$'});
});

router.get('/phishing/analysis/spearphishing', function(req,res,next) {
		res.render('offensive/phishing/analysis/spearphishing', {user: req.user, title: 'visitor@linuxfingers:~/phishing/spearphishing_analysis$'});
});

router.get('/phishing/analysis/corpus', function(req,res,next) {
		res.render('offensive/phishing/analysis/corpus', {user: req.user, title: 'visitor@linuxfingers:~/phishing/email_corpus$'});
});


module.exports = router;
