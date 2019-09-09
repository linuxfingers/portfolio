var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('cv', {user: req.user, title: 'About Us'});
});

module.exports = router;
