var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('visaudio', {user: req.user, title: 'visitor@linuxfingers:~/visual&&audio$'});
});

router.get('/indesign', function(req, res, next) {
	res.render('indesign', {user: req.user, title: 'visitor@linuxfingers:~/inDesign_REdesign$'});
});


module.exports = router;
