var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('masters', {user: req.user, title: 'massters'});
});

router.get('/masters/techdef', function(req, res, next) {
	res.render('techdef', {user: req.user, title: 'masters project'});
});



module.exports = router;
