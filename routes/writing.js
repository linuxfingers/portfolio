var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
		res.render('writing', {user: req.user, title: 'visitor@rhetsec:~/previous_works$'});
});

router.get('/digispace', function(req, res, next) {
		res.render('writing/digispace', {user: req.user, title: 'visitor@rhetsec:~/digital_spaces$'});
});

router.get('/gonzo', function(req, res, next) {
	res.render('writing/gonzo', {user: req.user, title: 'visitor@rhetsec:~/gonzo&&narrative$'});
});

router.get('/other', function(req, res, next) {
		res.render('writing/other', {user: req.user, title: 'visitor@rhetsec:~/other_writing$'});
});

router.get('/poetry', function(req, res, next) {
		res.render('writing/poetry', {user: req.user, title: 'visitor@rhetsec:~/poetry$'});
});

module.exports = router;
