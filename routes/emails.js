var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('emails', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/emailan', function(req, res, next) {
	if (req.user){
		res.render('emailan', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails/analysis_of_email_categories$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/bulkan', function(req, res, next) {
	if (req.user){
		res.render('bulkan', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails/bulk_phishing_analysis$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/clonean', function(req, res, next) {
	if (req.user){
		res.render('clonean', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails/clone_phishing_analysis$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/boxan', function(req, res, next) {
	if (req.user){
		res.render('boxan', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails/box_phishing_analysis$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/pharman', function(req, res, next) {
	if (req.user){
		res.render('pharman', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails/pharming_analysis$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/malspaman', function(req, res, next) {
	if (req.user){
		res.render('malspaman', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails/malspam_analysis$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/spearan', function(req, res, next) {
	if (req.user){
		res.render('spearan', {user: req.user, title: 'visitor@linuxfingers:~/phase1/emails/spearphishing_analysis$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/antemp', function(req, res, next) {
	if (req.user){
		res.render('antemp', {user: req.user, title: 'visitor@linuxfingers:~/template$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

module.exports = router;
