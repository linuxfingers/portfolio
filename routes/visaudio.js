var express = require('express');
var router = express.Router();

router.get('/artwork', function(req, res, next) {
		res.render('visaudio/artwork', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/artwork$'});
});

router.get('/music', function(req, res, next) {
		res.render('visaudio/music', {user: req.user, title: 'visitor@linuxfingers:~/visaudio/music$'});
});

module.exports = router;
