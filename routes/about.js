var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('about', {user: req.user, title: 'visitor@linuxfingers:~/about$ '});
});

router.get('/provsec', function(req, res, next) {
	res.render('provsec', {user: req.user, title: 'visitor@linuxfingers:~/provsec$ '});
});

module.exports = router;
