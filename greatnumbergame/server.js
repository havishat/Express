var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");
var session = require('express-session');
app.use(session({secret: 'greatnumbergame'}));

app.use(bodyParser.urlencoded({ extended: true}));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    if(req.session == null){
        req.session.show = "none"
    }
    context = {
        "comment":req.session.comment,
        "show":req.session.show,
        "color":req.session.color

    }
    // console.log("MAIN",comment)
    // console.log(req.session.randomenum)
    res.render("index", {context:context});
})

app.post("/number", function(req, res){
    req.session.randomenum =  Number(Math.floor(Math.random() * 101));
    console.log("number", typeof(req.body.number))
    if(Number(req.body.number) == Number(req.session.randomenum)) {
        req.session.comment = "was the number!"
        req.session.show = "true"
        req.session.color = "green"
        play = "same"
        res.redirect('/')
    } else if (Number(req.body.number) > Number(req.session.randomenum)) {
        req.session.comment = "Too high!"
        req.session.show = "true"
        req.session.color = "red"
        res.redirect('/')
    } else{
        req.session.comment = "Too low!"
        req.session.show = "true"
        req.session.color = "green"
        
        
        // console.log(req.session.number)
    }
    console.log("RANDOM number",req.session.randomenum)
    console.log("in numbers",req.session.comment)
res.redirect('/')
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});