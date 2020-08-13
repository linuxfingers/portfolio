var express = require("express"),
    hbs = require('express-handlebars'),
    errorHandler = require('express-error-handler');

const app = express()

path = require('path');

app.use("/", express.static(__dirname + "/public", { dotfiles:'allow' } ));
app.engine('.hbs', hbs({defaultLayout: 'os', extname: '.hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');


function logger(req, res, next) {
  console.log(new Date(), req.url)
  next()
}

//main
var index = require('./routes/index');
var uc = require('./routes/uc');

//MA stuff
var init = require('./routes/init');
var offensive = require('./routes/offensive');
var defensive = require('./routes/defensive');

//non-MA stuff
var visaudio = require('./routes/visaudio');
var writing = require('./routes/writing');
var eva = require('./routes/eva');

//404?
var ope = require('./routes/ope');

//main routes
app.use('/', index);
app.use('/uc', uc);

//MA stuff
app.use('/init', init);
app.use('/offensive', offensive);
app.use('/defensive/', defensive)

//non-MA stuff
app.use('/visaudio', visaudio);
app.use('/writing', writing);
app.use('/eva', eva);
//end routes

app.use('/*', ope);

var server = app.listen(5000, function() {
  console.log("Cogitator awaiting responses...")
})
