
/*
======================================================
; Title:  nesbitt-assignment5.3
; Author: Richard Krasso
; Date:   5-27-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates PUG views
;=====================================================
*/


var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {

    response.render("index", {

        message: "Welcome to Michellez Pug page!"

    });

});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
