var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('training', {user: req.user, title: 'visitor@linuxfingers:~/phase2/training$ '});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/elogin', function(req, res, next) {
	if (req.user){
		res.render('elogin', {user: req.user});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

module.exports = router;
