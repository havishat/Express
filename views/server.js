// // Load the express module (Where do you think this comes from?)
// var express = require("express");
// // invoke var express and store the resulting application in var app
// var app = express();

// // this is the line that tells our server to use the "/static" folder for static content
// app.use(express.static(__dirname + "/static"));
// // two underscores before dirname
// // try printing out __dirname using console.log to see what it is and why we use it

// // This sets the location where express will look for the ejs views
// app.set('views', __dirname + '/views'); 
// app.set('view engine', 'ejs');

// // lets handle the base route "/" and respond with "Hello Express"
// app.get('/', function(request, response) {
//     response.send("<h1>Hello Express</h1>");
// })
//   // notice that the function is app.get(...) why do you think the function is called get?

// // Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade

// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array});
// })

//   // Tell the express app to listen on port 8000
// app.listen(8000, function() {
//     console.log("listening on port 8000");
//   })
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)

  // require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
