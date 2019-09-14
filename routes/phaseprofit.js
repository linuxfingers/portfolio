var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('phaseprofit', {user: req.user, title: 'visitor@linuxfingers:~/phase???$ '});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

module.exports = router;
