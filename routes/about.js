var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	res.redirect('/about/jen');
});

//router.get('/jen', function(req, res, next) {
//if (req.user){
//		res.render('about/jen', {user: req.user, title: 'visitor@linuxfingers:~/about/jen$ '});
//	}
//	else{
//		res.redirect('http://www.linuxfingers.com/signin');
//	}
//});

router.get('/jen', function(req, res, next) {
	res.render('about/jen', {user: req.user, title: 'visitor@linuxfingers:~/about/jen$'});
});


router.get('/cv', function(req, res, next) {
	//if (req.user){
		res.render('about/cv', {user: req.user, title: 'visitor@linuxfingers:~/about/cv$'});
	//}
	//else{
	//	res.redirect('http://www.linuxfingers.com/signin');
	//}
});

router.get('/provsec', function(req, res, next) {
	//if (req.user){
		res.render('about/provsec', {user: req.user, title: 'visitor@linuxfingers:~/about/provsec$ '});
	//}
	//else{
	//	res.redirect('http://www.linuxfingers.com/signin');
	//}
});

module.exports = router;
