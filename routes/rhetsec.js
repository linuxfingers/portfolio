var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	if (req.user){
		res.render('rhetsec', {user: req.user, title: 'visitor@linuxfingers:~/project_desc$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/projdesc', function(req, res, next) {
	if (req.user){
		res.render('projdesc', {user: req.user, title: 'visitor@linuxfingers:~/project_desc$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/techdef', function(req, res, next) {
	if (req.user){
		res.render('techdef', {user: req.user, title: 'visitor@linuxfingers:~/technical_definitions$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/theproject', function(req, res, next) {
	if (req.user){
		res.render('theproject', {user: req.user, title: 'visitor@linuxfingers:~/theproject$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/rationale', function(req, res, next) {
	if (req.user){
		res.render('rationale', {user: req.user, title: 'visitor@linuxfingers:~/theproject/rationale$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/limitations', function(req, res, next) {
	if (req.user){
		res.render('limitations', {user: req.user, title: 'visitor@linuxfingers:~/theproject/limitations$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});


module.exports = router;
