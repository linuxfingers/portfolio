var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signin'
  })
);

module.exports = router;
