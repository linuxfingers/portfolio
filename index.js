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
    errorHandler = require('express-error-handler');

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
        req.session.error = 'That username is already in use or you are not authorized to access this content. Contact me for more information.'; //inform user could not log them in
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

app.use("/", express.static(__dirname + "/public", { dotfiles:'allow' } ));

app.engine('.hbs', hbs({defaultLayout: 'os', extname: '.hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');


//main
var index = require('./routes/index');
var uc = require('./routes/uc');

//passport stuff
var signin = require('./routes/signin');
var local_reg = require('./routes/local_reg');
var login = require('./routes/login');
var logout = require('./routes/logout');

//MA stuff
var init = require('./routes/init');
var offensive = require('./routes/offensive');
var defensive = require('./routes/defensive');

//non-MA stuff
var visaudio = require('./routes/visaudio');
var writing = require('./routes/writing');
var about = require('./routes/about');

//404?
var ope = require('./routes/ope');

//main routes
app.use('/', index);
app.use('/uc', uc);

//displays our signup page
app.use('/signin', signin);

//sends the request through our local signup strategy, and if successful takes user to homepage, otherwise returns then to signin page
app.use('/local-reg', local_reg);

//sends the request through our local login/signin strategy, and if successful takes user to homepage, otherwise returns then to signin page
app.use('/login', login);

//logs user out of site, deleting them from the session, and returns to homepage
app.use('/logout', logout);

//MA stuff
app.use('/init', init);
app.use('/offensive', offensive);
app.use('/defensive/', defensive)

//non-MA stuff
app.use('/visaudio', visaudio);
app.use('/writing', writing);
app.use('/about', about);
//end routes

app.use('/*', ope);

app.listen(5000, function() {
  console.log('Testing on port 5000, sir!');
});
