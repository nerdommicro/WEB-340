/*
======================================================
; Title:  nesbitt-assignment
; Author: Richard Krasso
; Date:   5-17-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates CRUD
;=====================================================
*/
var assignment = "4.4"
//Print my header to the screen
const header = require('../../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

/*
  Expected output:

  Michelle Nesbitt
  Exercise Number
  Today's Date
  */
 var express = require("express");
 var http = require("http");

 var app = express();

 app.get("/", function(request, response) {
   response.send("API invoked as an HTTP GET request.");
 });

 app.put("/", function(request, response) {
   response.send("API invoked as an HTTP PUT request.");
 });

 app.post("/", function(request, response) {
   response.send("API invoked as an HTTP POST request");
 });

 app.delete("/", function(request, response) {
   response.send("API invoked as an HTTP DELETE request");
 });

 http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");
 });
