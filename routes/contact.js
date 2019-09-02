var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('about', {user: req.user, title: 'contact'});
});

module.exports = router;
