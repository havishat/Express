var express = require("express");

var app = express();

app.get('/', function(request, reponse) {
    reponse.send("Hello Express");
})

app.listen(8000, function(){
    console.log("listening on 8000");
})