/*
======================================================
; Title:  nesbitt-assignment
; Author: Richard Krasso
; Date:   6/5/2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates Mongoose Models
;=====================================================
*/
// Require statements
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Fruit Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true},
  id: {type: String, required: true}
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);


