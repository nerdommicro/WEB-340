/*
======================================================
; Title:  nesbitt-assignment4.3.js
; Author: Michelle Nesbitt
; Date:   5-17-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates JSON APIs
;=====================================================
*/
var assignment = "4.3"
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

 app.get("/not-found", function(request, response) {

     response.status(404);

     response.json({

         error: "Bummer...the resource you requested was not found."

     })

 });

 app.get("/ok", function(request, response) {

     response.status(200);

     response.json({

         message: "Great! The page loaded correctly."

     })

 });

 app.get("/not-implemented", function(request, response) {

     response.status(501);

     response.json({

         error: "Error status: Page not implemented."

     })

 });

 http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

 });
