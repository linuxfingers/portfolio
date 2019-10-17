var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
		res.render('writing', {user: req.user, title: 'visitor@linuxfingers:~/previous_works$'});
});

router.get('/digispace', function(req, res, next) {
		res.render('writing/mpca', {user: req.user, title: 'visitor@linuxfingers:~/digital_spaces$'});
});

router.get('/gonzo', function(req, res, next) {
	res.render('writing/gonzo', {user: req.user, title: 'visitor@linuxfingers:~/gonzo&&narrative$'});
});

router.get('/other', function(req, res, next) {
		res.render('writing/other', {user: req.user, title: 'visitor@linuxfingers:~/other_writing$'});
});

router.get('/poetry', function(req, res, next) {
		res.render('writing/poetry', {user: req.user, title: 'visitor@linuxfingers:~/poetry$'});
});

module.exports = router;
