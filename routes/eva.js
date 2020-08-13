var express = require('express');
var router = express.Router();

router.get('/cv', function(req, res, next) {
	res.render('eva/cv', {user: req.user, title: 'visitor@linuxfingers:~/eva/cv$'});
});

router.get('/eva', function(req, res, next) {
	res.render('eva/recursion', {user: req.user, title: 'visitor@linuxfingers:~/eva/recursion$'});
});

module.exports = router;
