var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
		res.render('writing', {user: req.user, title: 'visitor@linuxfingers:~/previous_works$'});
});

router.get('/comm', function(req, res, next) {
		res.render('writing/comm', {user: req.user, title: 'visitor@linuxfingers:~/4chan_paper$'});
});

router.get('/mpca', function(req, res, next) {
		res.render('writing/mpca', {user: req.user, title: 'visitor@linuxfingers:~/mpca_2016$'});
});

router.get('/seo', function(req, res, next) {
		res.render('writing/seo', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
});

router.get('/poetry', function(req, res, next) {
		res.render('writing/poetry', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
});

router.get('/gonzo', function(req, res, next) {
		res.render('writing/gonzo', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
});

module.exports = router;
