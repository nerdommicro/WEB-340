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
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var app = express();
const Employee = require('./models/employee');

var mongoDB = "mongodb+srv://nerdommicro:SupperTime27@buwebdev-cluster-1-wbbs2.mongodb.net/fms?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

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
var employee = new Employee({

  firstName: "Michelle",
  lastName: "Nesbitt"

});
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
