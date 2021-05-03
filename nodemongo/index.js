const connection= require("./model");
const express = require('express');
const app = express();
const path = require('path');
const expresshandlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const coursecontroller = require("./controllers/course");

app.use(bodyparser.urlencoded({
  extended:true
}));

app.set('views',path.join(__dirname,"/views/"));

app.engine("hbs",expresshandlebars({
  extname: "hbs",
  defaultLayout:"mainlayout",
  layoutsDir : __dirname+"/views/layouts"
}));

app.set("view engine","hbs");

app.get("/",(req,res)=>{
  res.render("index",{})
});

app.use("/course",coursecontroller);

app.listen("3000",()=>{
  console.log("3000 server started");
});
