'use strict';

/*
 * Express Dependencies
 */

var express = require('express');
var app = express();
var port = 5000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json()); 
mongoose.model('Card',require('./model/cardModel').Card);

var create = require('./routes/createCard'); 
var update = require('./routes/updateCard');
var display  = require('./routes/displayCard');
app.post('/card/create/:name',create.Card);
app.put('/card/update/:_id/:name',update.Card);

app.get('/card',display.Card);

/*
 * Use Handlebars for templating
 */
var exphbs = require('express3-handlebars');
var hbs;

// For gzip compression
app.use(express.compress());
app.use(express.bodyParser());
if (process.env.NODE_ENV === 'production') {
    // Set the default layout and locate layouts and partials
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: 'dist/views/layouts/',
        partialsDir: 'dist/views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/dist/views');
    
    // Locate the assets
    app.use(express.static(__dirname + '/dist/assets'));

} else {
    app.engine('handlebars', exphbs({
        // Default Layout and locate layouts and partials
        defaultLayout: 'main',
        layoutsDir: 'views/layouts/',
        partialsDir: 'views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/views');
    
    // Locate the assets
    app.use(express.static(__dirname + '/assets'));
}

// Set Handlebars
app.set('view engine', 'handlebars');
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);
module.exports = app;