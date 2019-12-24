var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
		res.render('init/theproject', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec_/project_readme$'});
});

router.get('/rhet101', function(req,res,next) {
		res.render('init/rhet101', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec_/rhetoric_crash_course'});
});

router.get('/references', function(req,res,next) {
		res.render('init/references', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec_/references$'});
});

module.exports = router;
