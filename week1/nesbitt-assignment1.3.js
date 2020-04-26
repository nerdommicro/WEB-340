/*
======================================================
; Title:  nesbitt-assignment1.3
; Author: Michelle Nesbitt
; Date:   4-25-2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates
;=====================================================
*/
var assignment = "1.3"
//Print my header to the screen
const header = require('../Nesbitt-header.js');
//Display my header with exercise number
console.log(header.display("Michelle", "Nesbitt", "Exercise " + assignment));

/*
  Expected output:

  Michelle Nesbitt
  Exercise Number
  Today's Date
  */
 var url = require("url");

 var parsedURL = url.parse("https://www.cables.ws/profile?name=nesbitt");

 console.log(parsedURL.protocol);

 console.log(parsedURL.host);

 console.log(parsedURL.query);
