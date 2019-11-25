var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('ope', {user: req.user, title: 'visitor@rhetsec:~/ ope$'});
});

module.exports = router;
