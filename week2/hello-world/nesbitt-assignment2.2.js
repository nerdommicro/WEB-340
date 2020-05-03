/*
======================================================
; Title:  nesbitt-assignment2.2.js
; Author: Michelle Nesbitt
; Date:   5-1-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates Node.js
;=====================================================
*/
var assignment = "2.2"
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

app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

http.createServer(app).listen(8080);
