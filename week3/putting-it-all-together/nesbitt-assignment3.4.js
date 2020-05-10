/*
======================================================
; Title:  nesbitt-assignment3.4.js
; Author: Michelle Nesbitt
; Date:   5-9-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates routing and views
;=====================================================
*/
var assignment = "3.4"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080.");

});
