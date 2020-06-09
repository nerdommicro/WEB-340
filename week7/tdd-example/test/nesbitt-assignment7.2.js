/*
======================================================
; Title:  nesbitt-assignment
; Author: Richard Krasso
; Date:   June 4, 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates TDD
;=====================================================
*/


var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});
