var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('writing', {user: req.user, title: 'visitor@linuxfingers:~/previous_works$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/4chan', function(req, res, next) {
	if (req.user){
		res.render('4chan', {user: req.user, title: 'visitor@linuxfingers:~/4chan_paper$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/mpca', function(req, res, next) {
	if (req.user){
		res.render('mpca', {user: req.user, title: 'visitor@linuxfingers:~/mpca_2016$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/seo', function(req, res, next) {
	if (req.user){
		res.render('seo', {user: req.user, title: 'visitor@linuxfingers:~/seo$'});
		}
		else{
			res.redirect('/uc');
		}
});


module.exports = router;
