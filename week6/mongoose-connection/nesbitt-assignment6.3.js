/*
=========================================================
; Title:  nesbitt-assignment6.3
; Author: Professor Krasso
; Updated by: Michelle Nesbitt
; Date:   27 May 2020
; Description: This demonstrates Mongodb
;========================================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://nerdommicro:SupperTime27@buwebdev-cluster-1-wbbs2.mongodb.net/fms?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("dev"));

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});
