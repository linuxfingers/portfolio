var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('portfolio', {user: req.user, title: 'visitor@linuxfingers:~/portfolio$'});
});

module.exports = router;
