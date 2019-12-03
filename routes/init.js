var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
		res.render('init/theproject', {user: req.user, title: 'visitor@linuxfingers:~/portfolio/the_project$'});
});

router.get('/rhet101', function(req,res,next) {
		res.render('init/rhet101', {user: req.user, title: 'visitor@linuxfingers:~/portfolio/rhetoric_101$'});
});

router.get('/bibliography', function(req,res,next) {
		res.render('init/bibliography', {user: req.user, title: 'visitor@linuxfingers:~/portfolio/bibliography$'});
});

module.exports = router;
