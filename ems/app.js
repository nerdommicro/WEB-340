/*
======================================================
; Title:  nesbitt-assignment app.js
; Author: Richard Krasso
; Date:   June 21, 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates EJS Templates
;=====================================================
*/
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var csrfProtection = csrf({cookie: true});

var app = express();

const Employee = require('./models/employee');

var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1-wbbs2.mongodb.net/fms?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});



app.get("/", function (request, response) {

    response.render("index", {
        message: "Home Page"
    });

});

app.post("/process", function(request, response) {

  if (!request.body.txtFirstName) {
    response.status(400).send("Entries must have a name");
    return;
  }
  if (!request.body.txtLastName) {
    response.status(400).send("Entries must have a name");
    return;
  }
  var employee = new Employee({
    firstName: request.body.txtFirstName,
    lastName: request.body.txtLastName,
    id: request.body.txtID
  });

  employee.save(error => {
    if (error) throw error;
    console.log("Employee saved successfully!");
  });

  response.redirect("/");
});

app.get("/list", function (request, response) {
  Employee.find({}, (error, employees) => {
    if (error) throw error;
    response.render("list", {
      title: "Employees List",
      employees: employees
    });
  });
});

app.get("/new", function (request, response) {

  response.render("new", {
      message: "Add New Employee"
  });

});

app.get("/view/:queryName", function (request, response) {

  var queryName = request.params.queryName;

  Employee.find({'id': queryName}, function(error, employees) {

      if (error) throw error;

      console.log(employees);

      if (employees.length > 0) {

          response.render("view", {

              title: "Employee Record",

              employee: employees

          })

      }

      else {

          response.redirect("/list")

      }

  });

});


app.set("port", process.env.PORT || 8080);
http.createServer(app).listen(app.get("port"), function() { console.log("Application started on port"  + app.get("port")) });
