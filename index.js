var express = require('express'),
    hbs = require('express-handlebars'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    TwitterStrategy = require('passport-twitter'),
    GoogleStrategy = require('passport-google'),
    FacebookStrategy = require('passport-facebook'),
    path = require('path');

var config = require('./config.js'), //config file contains all tokens and other private info
 funct = require('./functions.js'); //funct file contains our helper functions for our Passport and database work


const app = express();

//===============PASSPORT===============
passport.serializeUser(function(user, done) {
  console.log("serializing " + user.username);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log("deserializing " + obj);
  done(null, obj);
});

//This section will contain our work with Passport
passport.use('local-signin', new LocalStrategy(
  {passReqToCallback : true}, //allows us to pass back the request to the callback
  function(req, username, password, done) {
    funct.localAuth(username, password)
    .then(function (user) {
      if (user) {
        console.log("LOGGED IN AS: " + user.username);
        req.session.success = 'You are successfully logged in ' + user.username + '!';
        done(null, user);
      }
      if (!user) {
        console.log("COULD NOT LOG IN");
        req.session.error = 'Could not log user in. Please try again.'; //inform user could not log them in
        done(null, user);
      }
    })
    .fail(function (err){
      console.log(err.body);
    });
  }
));
// Use the LocalStrategy within Passport to register/"signup" users.
passport.use('local-signup', new LocalStrategy(
  {passReqToCallback : true}, //allows us to pass back the request to the callback
  function(req, username, password, done) {
    funct.localReg(username, password)
    .then(function (user) {
      if (user) {
        console.log("REGISTERED: " + user.username);
        req.session.success = 'You are successfully registered and logged in ' + user.username + '!';
        done(null, user);
      }
      if (!user) {
        console.log("COULD NOT REGISTER");
        req.session.error = 'That username is already in use, please try a different one.'; //inform user could not log them in
        done(null, user);
      }
    })
    .fail(function (err){
      console.log(err.body);
    });
  }
));

//===============EXPRESS================
// Configure Express
app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if (err) res.locals.error = err;
  if (msg) res.locals.notice = msg;
  if (success) res.locals.success = success;

  next();
});


app.use("/public", express.static(__dirname + "/public"));

app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');


var index = require('./routes/index');
var about = require('./routes/about');
var contact = require('./routes/contact');
var uc = require('./routes/uc');

var signin = require('./routes/signin');
var local_reg = require('./routes/local_reg');
var login = require('./routes/login');
var logout = require('./routes/logout');
var portfolio = require('./routes/portfolio');
var cv = require('./routes/cv');

var emails = require('./routes/emails');
var masters = require('./routes/masters');
var previous = require('./routes/previous');

var training = require('./routes/training');

app.use('/', index);

//display the about page
app.use('/about', about);

//display the contact page
app.use('/contact', contact);

//displays our signup page
app.use('/signin', signin);

//sends the request through our local signup strategy, and if successful takes user to homepage, otherwise returns then to signin page
app.use('/local-reg', local_reg);

//sends the request through our local login/signin strategy, and if successful takes user to homepage, otherwise returns then to signin page
app.use('/login', login);

//logs user out of site, deleting them from the session, and returns to homepage
app.use('/logout', logout);

//portfolio route
app.use('/portfolio', portfolio);

app.use('/previous', previous);
//portfolio route
app.use('/emails', emails);

app.use('/masters', masters);

app.use('/uc', uc);

app.use('/cv', cv);

app.use('/training', training);

//

app.listen(5000, function() {
  console.log('Testing on port 5000, sir!');
});
