var express = require('express');
var router = express.Router();

//if logged in, else redirect
//router.get('/', function(req, res, next) {
//	if (req.user){
//		res.render('rhetsec', {user: req.user, title: 'visitor@linuxfingers:~/project_desc$'});
//		}
//		else{
//			res.redirect('http://www.linuxfingers.com/signin');
//		}
//});

//DO NOT PUSH LIVE IF NO REDIRECT FOR USER LOGIN//

//****Main Section*****//

router.get('/', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/about', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/about', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/limitations', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/limitations', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/limitations$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/rationale', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/rationale', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/rationale$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/assessment', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/assessment', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/self_assessment$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

//******Phase 0******//

router.get('/phase0/', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phaseprofit/index', {user: req.user, title:'visitor@linuxfingers.com:/rhetsec/phase0$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

//******Phase 1******//

router.get('/phase1/', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/bibliography', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/bibliography', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/bibliography$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/definitions', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/definitions', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/technical_definitions$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

//Email Analyses//

router.get('/phase1/email_analysis/', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/email_analysis/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/email_analysis/bulk', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/email_analysis/bulk', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/bulk_phishing_analysis$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/email_analysis/clonephishing', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/email_analysis/clonephishing', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/clonephishing_analysis$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/email_analysis/malspam', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/email_analysis/malspam', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/malspam_analysis$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/email_analysis/pse', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/email_analysis/pse', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/pse_analysis$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/email_analysis/spearphishing', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/email_analysis/spearphishing', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/spearphishing_analysis$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase1/email_analysis/corpus', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase1/email_analysis/corpus', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/email_corpus$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

//******Phase 2******//

router.get('/phase2/', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase2/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase2$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase2/training/', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase2/training/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase2/training$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase2/training/phished', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase2/training/phished', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase2/training/phished$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

router.get('/phase2/training/elogin', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phase2/training/elogin', {user: req.user, layout: 'false'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

//******Phase Profit******//

router.get('/phaseprofit/', function(req,res,next) {
	if (req.user){
		res.render('rhetsec/phaseprofit/index', {user: req.user, title:'visitor@linuxfingers.com:/rhetsec/phase_profit$'});
	}
	else{
		res.redirect('http://www.linuxfingers.com/signin');
	}
});

module.exports = router;
