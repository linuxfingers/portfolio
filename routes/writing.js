var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('writing', {user: req.user, title: 'visitor@linuxfingers:~/previous_works$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/comm', function(req, res, next) {
	if (req.user){
		res.render('comm', {user: req.user, title: 'visitor@linuxfingers:~/4chan_paper$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/mpca', function(req, res, next) {
	if (req.user){
		res.render('mpca', {user: req.user, title: 'visitor@linuxfingers:~/mpca_2016$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/seo', function(req, res, next) {
	if (req.user){
		res.render('seo', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/poetry', function(req, res, next) {
	if (req.user){
		res.render('poetry', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

router.get('/gonzo', function(req, res, next) {
	if (req.user){
		res.render('gonzo', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});


module.exports = router;
