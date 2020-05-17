/*
======================================================
; Title:  nesbitt-assignment
; Author: Richard Krasso
; Date:   5-17-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates JSON APIs
;=====================================================
*/
var assignment = "4.2"
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

 app.get("/customer/:id", function (request, response) {

     var id = parseInt(request.params.id, 10);

     response.json({

         firstName: "Michelle",

         lastName: "Nesbitt",

         employeeId: id

     });

 });

 http.createServer(app).listen(8080, function() {

     console.log("Application started on port 8080");

 });
