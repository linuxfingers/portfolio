var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('masters', {user: req.user, title: 'visitor@linuxfingers:~/masters$'});
});

router.get('/techdef', function(req, res, next) {
	res.render('techdef', {user: req.user, title: 'visitor@linuxfingers:~/technical_definitions$'});
});

router.get('/theproject', function(req, res, next) {
	res.render('theproject', {user: req.user, title: 'visitor@linuxfingers:~/theproject$'});
});



module.exports = router;
