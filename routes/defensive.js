var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('defensive/index', {user: req.user, title: 'visitor@linuxfingers:~/defensive/readme$'});
	}
	else{
		res.redirect('/signin');
	}
});

router.get('/sat', function(req,res,next) {
	if (req.user){
		res.render('defensive/sat/index', {user: req.user, title: 'visitor@linuxfingers:~/defensive/sat/readme$'});
	}
	else{
		res.redirect('/signin');
	}
});

module.exports = router;
