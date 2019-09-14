var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('about', {user: req.user, title: 'visitor@linuxfingers:~/about$ '});
		}
		else {
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/jen', function(req, res, next) {
	if (req.user){
		res.render('jen', {user: req.user, title: 'visitor@linuxfingers:~/about/jen$ '});
		}
		else {
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/provsec', function(req, res, next) {
	if (req.user){
		res.render('provsec', {user: req.user, title: 'visitor@linuxfingers:~/about/provsec$ '});
		}
		else {
			res.redirect('http://www.linuxfingers.com/uc');
			}
});

router.get('/contact', function(req, res, next) {
	if (req.user){
		res.render('contact', {user: req.user, title: 'visitor@linuxfingers:~/about/contact$'});
		}
		else {
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

module.exports = router;
