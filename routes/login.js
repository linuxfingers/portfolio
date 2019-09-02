var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('local-signin', {
  successRedirect: '/',
  failureRedirect: '/signin'
  })
);

module.exports = router;
