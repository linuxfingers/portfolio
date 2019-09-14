var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('visaudio', {user: req.user, title: 'visitor@linuxfingers:~/visual&&audio$'});
		}
		else{
			res.redirect('/uc');
		}
});

router.get('/indesign', function(req, res, next) {
	if (req.user){
		res.render('indesign', {user: req.user, title: 'visitor@linuxfingers:~/inDesign_REdesign$'});
		}
		else{
			res.redirect('/uc');
		}
});


module.exports = router;
