var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('visaudio', {user: req.user, title: 'visitor@linuxfingers:~/visual&&audio$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/artwork', function(req, res, next) {
	if (req.user){
		res.render('artwork', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/artwork$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/indesign', function(req, res, next) {
	if (req.user){
		res.render('indesign', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/inDesign_REdesign$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/music', function(req, res, next) {
	if (req.user){
		res.render('music', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/music$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

module.exports = router;
