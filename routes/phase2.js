var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('training', {user: req.user, title: 'visitor@linuxfingers:~/training$ '});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/training/elogin', function(req, res, next) {
	if (req.user){
		res.render('elogin', {user: req.user});
		}
		else{
			res.redirect('/uc');
		}
});

module.exports = router;
