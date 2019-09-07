var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('uc', {user: req.user, title: 'under construction'});
});

module.exports = router;
