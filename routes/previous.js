var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('previous', {user: req.user, title: 'previous works'});
});

router.get('/4chan', function(req, res, next) {
	res.render('4chan', {user: req.user, title: '4chan paper'});
});

router.get('/mpca', function(req, res, next) {
	res.render('mpca', {user: req.user, title: 'mpca 2016'});
});

router.get('/indesign', function(req, res, next) {
	res.render('indesign', {user: req.user, title: 'inDesign REdesign'});
});

module.exports = router;
