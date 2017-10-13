// require express
var express = require("express");
// path module == try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();
// var bodyParser = require('body-parser');
var session = require('express-session');
//secret key since we are using key
app.use(session({secret: 'counter'})); // string for encryption
// use it!
// app.use(bodyParser.urlencoded({ extended: true}));
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting up ejs and our views folder 
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
        if(!req.session.counter) {
            req.session.counter = 1;
        //console.log(req.session.count); 
        } else { 
            req.session.counter += 1 
            //console.log(req.session.count); 
        }
    res.render('index', {counter:req.session.counter});
})

app.post('/add2', function(req, res) {
     req.session.counter += 1; 
     console.log(req.session.counter); 
res.redirect("/"); }) 

app.post('/reset', function(req, res) {
    req.session.counter = 0; 
    console.log(req.session.counter); 
res.redirect("/"); }) 

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});

