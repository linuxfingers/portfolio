var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user){
		res.render('cv', {user: req.user, title: 'visitor@linuxfingers:~/cv$'});
		}
		else{
			res.redirect('http://www.linuxfingers.com/uc');
		}
});

module.exports = router;
