
/*
======================================================
; Title:  nesbitt-assignment
; Author: Richard Krasso
; Date:   June 5, 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates TDD
;=====================================================
*/
var fruits = require("../fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});
