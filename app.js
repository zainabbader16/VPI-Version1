const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
   res.render("home", {});
});

app.get("/about", function(req,res){
   res.render("about", {});
});

app.get("/property", function(req,res){
   res.render("property", {});
});

app.get("/residential", function(req,res){
   res.render("residential", {});
});

app.get("/commercial", function(req,res){
   res.render("commercial", {});
});

app.get("/contactForm", function(req,res){
   res.render("contactForm", {});
});

app.listen(process.env.PORT || 5000, function(){
console.log("connected to server now");           
});


