var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('uc', {user: req.user, title: 'visitor@linuxfingers:~/under_construction'});
});

module.exports = router;
