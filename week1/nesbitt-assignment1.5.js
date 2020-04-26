/*
======================================================
; Title:  nesbitt-assignment1.5.js
; Author: Professor Krasso
; Date:   4-26-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates
;=====================================================
*/
var assignment = "1.5"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment + "\n"));

/*
  Expected output:

  Michelle Nesbitt
  Exercise Number
  Today's Date
  */
 var http = require("http");

 function processRequest(req, res) {

 var body = "Hello Welcome to Michelle's World";

     var contentLength = body.length;

     res.writeHead(200, {

         'Content-Length': contentLength,

         'Content-Type': 'text/plain'

     });

     res.end(body);

 }

 var s = http.createServer(processRequest);

 s.listen(8080);
