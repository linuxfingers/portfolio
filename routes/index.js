var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {user: req.user, title: 'visitor@linuxfingers:~/'});
});


router.get('/starthere', function(req,res,next) {
	if (req.user){
		res.render('starthere', {user: req.user, title: 'visitor@linuxfingers:~/start_here$'});
	}
	else{
		res.redirect('signin');
	}
});

module.exports = router;
