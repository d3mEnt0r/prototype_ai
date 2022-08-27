const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

let eventName = "";
let description = "";
let about;
let price; 
let time;
let date;
let duration;
let link = "";
let banner = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("dashboard");
});

app.get("/createEvent", function(req, res){
    res.render("createEvent");
});

app.get("/previewPage", function(req, res){
    res.render("previewPage", {eventName:eventName, description:description, about:about, date:date, time:time, link:link, price:price, duration:duration, eventBanner:banner});
});

app.post("/createEvent", function(req, res){
    eventName = req.body.eventName;
    description = req.body.description;
    about = req.body.about;
    price = req.body.price;
    time = req.body.time;
    date = req.body.date;
    duration = req.body.duration;
    link = req.body.link;
    res.render("previewPage");
    res.redirect("/previewPage");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is up and running!");
});
