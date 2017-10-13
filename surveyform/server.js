// require express
var express = require("express");
// path module == try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
//secret key since we are using key
app.use(session({secret: 'counter'})); // string for encryption
// use it!
app.use(bodyParser.urlencoded({ extended: true}));
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting up ejs and our views folder 
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/result', function(req, res) {
    name = req.body.name
    location = req.body.dojolocation
    language = req.body.favoritelanguage
    comment = req.body.comment
res.render("result", {Name:name, Dojo_location:location, Favorite_Language:language,Comment:comment}); 
}) 

app.get('/goback', function(req, res) {

res.redirect("/"); 
}) 

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});