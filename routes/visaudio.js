var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('visaudio/main', {user: req.user, title: 'visitor@linuxfingers:~/visual&&audio$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/artwork', function(req, res, next) {
	if (req.user){
		res.render('visaudio/artwork', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/artwork$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/indesign', function(req, res, next) {
	if (req.user){
		res.render('visaudio/indesign', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/inDesign_REdesign$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/music', function(req, res, next) {
	if (req.user){
		res.render('visaudio/music', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/music$'});
	}
	else{
		res.redirect('/signin');
	}
});

module.exports = router;
