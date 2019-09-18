var express = require('express');
var router = express.Router();

//if logged in, else redirect
//router.get('/', function(req, res, next) {
//		res.render('rhetsec', {user: req.user, title: 'visitor@linuxfingers:~/project_desc$'});
//		}
//		else{
//			res.redirect('http://www.linuxfingers.com/uc');
//		}
//});

//DO NOT PUSH LIVE IF NO REDIRECT FOR USER LOGIN//

//****Main Section*****//

router.get('/', function(req,res,next) {
		res.render('rhetsec/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec$'});
	}
);

router.get('/description', function(req,res,next) {
		res.render('rhetsec/description', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/project_description$'});
	}
);

router.get('/limitations', function(req,res,next) {
		res.render('rhetsec/limitations', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/limitations$'});
	}
);

router.get('/rationale', function(req,res,next) {
		res.render('rhetsec/rationale', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/rationale$'});
	}
);


//******Phase 0******//

router.get('/phase0/', function(req,res,next) {
		res.render('rhetsec/phaseprofit/index', {user: req.user, title:'visitor@linuxfingers.com:/rhetsec/phase0$'});
	}
);

//******Phase 1******//

router.get('/phase1/', function(req,res,next) {
		res.render('rhetsec/phase1/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1$'});
	}
);

router.get('/phase1/bibliography', function(req,res,next) {
		res.render('rhetsec/phase1/bibliography', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/bibliography$'});
	}
);

router.get('/phase1/definitions', function(req,res,next) {
		res.render('rhetsec/phase1/definitions', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/technical_definitions$'});
	}
);

//Email Analyses//

router.get('/phase1/email_analysis/', function(req,res,next) {
		res.render('rhetsec/phase1/email_analysis/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis$'});
	}
);

router.get('/phase1/email_analysis/boxphishing', function(req,res,next) {
	res.render('rhetsec/phase1/email_analysis/boxphishing', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/boxphishing_analysis$'});
	}
);

router.get('/phase1/email_analysis/bulk', function(req,res,next) {
		res.render('rhetsec/phase1/email_analysis/bulk', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/bulk_phishing_analysis$'});
	}
);

router.get('/phase1/email_analysis/clonephishing', function(req,res,next) {
		res.render('rhetsec/phase1/email_analysis/clonephishing', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/clonephishing_analysis$'});
	}
);

router.get('/phase1/email_analysis/malspam', function(req,res,next) {
		res.render('rhetsec/phase1/email_analysis/malspam', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/malspam_analysis$'});
	}
);

router.get('/phase1/email_analysis/pharming', function(req,res,next) {
		res.render('rhetsec/phase1/email_analysis/pharming', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/pharming_analysis$'});
	}
);

router.get('/phase1/email_analysis/spearphishing', function(req,res,next) {
		res.render('rhetsec/phase1/email_analysis/spearphishing', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/spearphishing_analysis$'});
	}
);

router.get('/phase1/email_analysis/corpuslist', function(req,res,next) {
		res.render('rhetsec/phase1/email_analysis/corpuslist', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase1/email_analysis/email_corpus$'});
	}
);

//******Phase 2******//

router.get('/phase2/', function(req,res,next) {
		res.render('rhetsec/phase2/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase2$'});
	}
);

router.get('/phase2/training/', function(req,res,next) {
		res.render('rhetsec/phase2/training/index', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase2/training$'});
	}
);

router.get('/phase2/training/phished', function(req,res,next) {
		res.render('rhetsec/phase2/training/phished', {user: req.user, title: 'visitor@linuxfingers:~/rhetsec/phase2/training/phished$'});
	}
);

router.get('/phase2/training/elogin', function(req,res,next) {
		res.render('rhetsec/phase2/training/elogin', {user: req.user, layout: 'false'});
	}
);

//******Phase Profit******//

router.get('/phaseprofit/', function(req,res,next) {
		res.render('rhetsec/phaseprofit/index', {user: req.user, title:'visitor@linuxfingers.com:/rhetsec/phase_profit$'});
	}
);

module.exports = router;
