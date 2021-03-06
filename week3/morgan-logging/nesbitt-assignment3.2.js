/*
======================================================
; Title:  nesbitt-assignment
; Author: Michelle Nesbitt
; Date:   5-9-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates
;=====================================================
*/
var assignment = "3.2"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        message: "Welcome to the Michelles Morgan Logger!"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
