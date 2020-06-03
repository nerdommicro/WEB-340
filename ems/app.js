/*
======================================================
; Title:  nesbitt-assignment app.js
; Author: Richard Krasso
; Date:   May 28, 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates EJS Templates
;=====================================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {
        title: "Home page"
    });

});
app.get("/list", function (request, response) {

  response.render("list", {
      title: "List of Employees"
  });

});
app.get("/new", function (request, response) {

  response.render("new", {
      title: "Add New Employee"
  });

});
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
