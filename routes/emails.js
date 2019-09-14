var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('emails', {user: req.user, title: 'visitor@linuxfingers:~/emails$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/emailan', function(req, res, next) {
	if (req.user){
		res.render('emailan', {user: req.user, title: 'visitor@linuxfingers:~/analysis_of_email_categories$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/bulkan', function(req, res, next) {
	if (req.user){
		res.render('bulkan', {user: req.user, title: 'visitor@linuxfingers:~/bulk_phishing_analysis$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/clonean', function(req, res, next) {
	if (req.user){
		res.render('clonean', {user: req.user, title: 'visitor@linuxfingers:~/clone_phishing_analysis$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/boxan', function(req, res, next) {
	if (req.user){
		res.render('boxan', {user: req.user, title: 'visitor@linuxfingers:~/box_phishing_analysis$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/pharman', function(req, res, next) {
	if (req.user){
		res.render('pharman', {user: req.user, title: 'visitor@linuxfingers:~/pharming_analysis$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/malspaman', function(req, res, next) {
	if (req.user){
		res.render('malspaman', {user: req.user, title: 'visitor@linuxfingers:~/malspam_analysis$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/spearan', function(req, res, next) {
	if (req.user){
		res.render('spearan', {user: req.user, title: 'visitor@linuxfingers:~/spearphishing_analysis$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/antemp', function(req, res, next) {
	if (req.user){
		res.render('antemp', {user: req.user, title: 'visitor@linuxfingers:~/template$'});
		}
		else{
			res.redirect('/uc');
		}
});

module.exports = router;
