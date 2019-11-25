var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {user: req.user, title: 'visitor@rhetsec:~/'});
});

router.get('/notepad', function(req, res, next) {
	res.render('notepad', {layout : false});
});

router.get('/test', function(req, res, next) {
	res.render('test', {title: 'visitor@rhetsec:~/ test.sh', layout : 'test'});
});



module.exports = router;
