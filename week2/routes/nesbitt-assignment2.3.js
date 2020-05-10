/*
======================================================
; Title:  nesbitt-assignment
; Author: Michelle Nesbitt
; Date:   2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates
;=====================================================
*/
var assignment = "2.3"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

var express = require("express");
var http = require("http");
var app = express();

app.get("/", function(request, response) {

    response.end("Welcome to the homepage!");

});

app.get("/about", function(request, response) {

    response.end("Welcome to the about page!");

});

app.get("/contact", function(request, response) {

    response.end("Welcome to the contact page!");

});

app.use(function(request, response) {

    response.statusCode = 404;
    response.end("404!");

});

http.createServer(app).listen(8080);
