var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('contact', {user: req.user, title: 'visitor@linuxfingers:~/contact$'});
});

module.exports = router;
