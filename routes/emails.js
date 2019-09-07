var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('emails', {user: req.user, title: 'the emails'});
});

router.get('/emailan', function(req, res, next) {
	res.render('emailan', {user: req.user, title: 'analysis of email categories'});
});

router.get('/bulkan', function(req, res, next) {
	res.render('bulkan', {user: req.user, title: 'bulk phishing email analysis'});
});

router.get('/clonean', function(req, res, next) {
	res.render('clonean', {user: req.user, title: 'clone phishing email analysis'});
});

router.get('/boxan', function(req, res, next) {
	res.render('boxan', {user: req.user, title: 'dropbox/google doc phishing email analysis'});
});

router.get('/pharman', function(req, res, next) {
	res.render('pharman', {user: req.user, title: 'pharming phishing email analysis'});
});

router.get('/malspaman', function(req, res, next) {
	res.render('malspaman', {user: req.user, title: 'malspam email analysis'});
});

router.get('/spearan', function(req, res, next) {
	res.render('spearan', {user: req.user, title: 'spearphishing email analysis'});
});

router.get('/antemp', function(req, res, next) {
	res.render('antemp', {user: req.user, title: 'rhetorical analysis template'});
});

module.exports = router;
