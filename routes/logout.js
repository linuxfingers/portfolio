var express = require('express');
var router = express.Router();

//logs user out of site, deleting them from the session, and returns to homepage
router.get('/', function(req, res){
  var name = req.user.username;
  console.log("LOGGIN OUT " + req.user.username)
  req.logout();
  res.redirect('/');
  req.session.notice = "see you later, " + name + ".";
});

module.exports = router;
