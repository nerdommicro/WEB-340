/*
======================================================
; Title:  nesbitt-assignment5.2
; Author: Richard Krasso
; Date:   5-27-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates EJS
;=====================================================
*/

var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var f = [

  "Michelle",

  "Nancy",

  "John",

  "Steve"

];


app.get("/", function(request, response) {

    response.render("index", {

        names: f

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
