var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	res.redirect('/about/jen');
});

router.get('/jen', function(req, res, next) {
//	if (req.user){
		res.render('about/jen', {user: req.user, title: 'visitor@linuxfingers:~/about/jen$ '});
//		}
//		else {
//			res.redirect('http://www.linuxfingers.com/uc');
//		}
});

router.get('/cv', function(req, res, next) {
//	if (req.user){
		res.render('cv', {user: req.user, title: 'visitor@linuxfingers:~/about/cv$'});
//		}
//		else{
//			res.redirect('http://www.linuxfingers.com/uc');
//		}
});

router.get('/provsec', function(req, res, next) {
//	if (req.user){
		res.render('provsec', {user: req.user, title: 'visitor@linuxfingers:~/about/provsec$ '});
//		}
//		else {
//			res.redirect('http://www.linuxfingers.com/uc');
//			}
});

router.get('/contact', function(req, res, next) {
//	if (req.user){
		res.render('contact', {user: req.user, title: 'visitor@linuxfingers:~/about/contact$'});
//		}
//		else {
//			res.redirect('http://www.linuxfingers.com/uc');
//		}
});

module.exports = router;
