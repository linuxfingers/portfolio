var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('training', {user: req.user, title: 'visitor@linuxfingers:~/training$ '});
});

router.get('/elogin', function(req, res, next) {
	res.render('elogin', {user: req.user});
});

module.exports = router;
