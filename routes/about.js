var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('about', {user: req.user, title: 'visitor@linuxfingers:~/about$ '});
});

router.get('/', function(req, res, next) {
	res.render('jen', {user: req.user, title: 'visitor@linuxfingers:~/about/jen$ '});
});

router.get('/provsec', function(req, res, next) {
	res.render('provsec', {user: req.user, title: 'visitor@linuxfingers:~/about/provsec$ '});
});

router.get('/contact', function(req, res, next) {
	res.render('contact', {user: req.user, title: 'visitor@linuxfingers:~/about/contact$'});
});

module.exports = router;
