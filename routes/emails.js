var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('emails', {user: req.user, title: 'visitor@linuxfingers:~/emails$'});
});

router.get('/emailan', function(req, res, next) {
	res.render('emailan', {user: req.user, title: 'visitor@linuxfingers:~/analysis_of_email_categories$'});
});

router.get('/bulkan', function(req, res, next) {
	res.render('bulkan', {user: req.user, title: 'visitor@linuxfingers:~/bulk_phishing_analysis$'});
});

router.get('/clonean', function(req, res, next) {
	res.render('clonean', {user: req.user, title: 'visitor@linuxfingers:~/clone_phishing_analysis$'});
});

router.get('/boxan', function(req, res, next) {
	res.render('boxan', {user: req.user, title: 'visitor@linuxfingers:~/box_phishing_analysis$'});
});

router.get('/pharman', function(req, res, next) {
	res.render('pharman', {user: req.user, title: 'visitor@linuxfingers:~/pharming_analysis$'});
});

router.get('/malspaman', function(req, res, next) {
	res.render('malspaman', {user: req.user, title: 'visitor@linuxfingers:~/malspam_analysis$'});
});

router.get('/spearan', function(req, res, next) {
	res.render('spearan', {user: req.user, title: 'visitor@linuxfingers:~/spearphishing_analysis$'});
});

router.get('/antemp', function(req, res, next) {
	res.render('antemp', {user: req.user, title: 'visitor@linuxfingers:~/template$'});
});

module.exports = router;
