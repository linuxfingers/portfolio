var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('uc', {user: req.user, title: 'visitor@rhetsec:~/under_construction'});
});

module.exports = router;
