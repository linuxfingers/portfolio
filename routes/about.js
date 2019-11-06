var express = require('express');
var router = express.Router();

router.get('/cv', function(req, res, next) {
	res.render('about/cv', {user: req.user, title: 'visitor@linuxfingers:~/about/cv$'});
});

router.get('/jen', function(req, res, next) {
	res.render('about/jen', {user: req.user, title: 'visitor@linuxfingers:~/about/jen$'});
});

router.get('/provsec', function(req, res, next) {
	res.render('about/provsec', {user: req.user, title: 'visitor@linuxfingers:~/about/provsec$ '});
});

module.exports = router;
