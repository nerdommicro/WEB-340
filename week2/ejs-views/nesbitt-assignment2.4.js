
/*
======================================================
; Title:  nesbitt-assignment2.4.js
; Author: Michelle Nesbitt
; Date:   5-1-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates EJS and views
;=====================================================
*/
var assignment = "2.4"
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


var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(request, response) {

  response.render("index", {
    firstName: "Michelle",
    lastName: "Nesbitt",
    address: "631 Rasweiler Blvd, Levittown, NY 11756"
  });

});

http.createServer(app).listen(8080, function() {

  console.log("EJS-Views app started on port 8080.");

});
