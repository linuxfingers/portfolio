var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('writing', {user: req.user, title: 'visitor@linuxfingers:~/previous_works$'});
});

router.get('/4chan', function(req, res, next) {
	res.render('4chan', {user: req.user, title: 'visitor@linuxfingers:~/4chan_paper$'});
});

router.get('/mpca', function(req, res, next) {
	res.render('mpca', {user: req.user, title: 'visitor@linuxfingers:~/mpca_2016$'});
});

router.get('/seo', function(req, res, next) {
	res.render('seo', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
});


module.exports = router;
