/*
======================================================
; Title:  nesbitt-assignment3.3.js
; Author: Michelle Nesbitt
; Date:   5-9-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates advanced routing
;=====================================================
*/
var assignment = "3.3"
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

 app.get("/:employeeId", function(request, response) {

    var productId = parseInt(request.params.employeeId, 10);

     response.render("index", {

        employeeId: employeeId

    })

});

 http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080");

});
