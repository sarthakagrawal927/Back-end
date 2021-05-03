/*Heyya, since most of you have converged the mongo tutorial.
I want you guys to build a server which take Details from users through post method.
Name,Email,Phone number.
Creates a user document and uploads it to the mongo db
Another endpoint /search/<name> will search in the database for the user and give its details back, using basic HTML.*/

const connection= require("./model");
const express = require('express');
const app = express();
const path = require('path');
const expresshandlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyparser = require('body-parser');
const Usercontroller = require("./controllers/user");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

app.use(bodyparser.urlencoded({
  extended:true
}));

app.set('views',path.join(__dirname,"/views/"));

app.engine("hbs",expresshandlebars({
  extname: "hbs",
  defaultLayout:"mainlayout",
  layoutsDir : __dirname+"/views/layouts",
  hbs: allowInsecurePrototypeAccess(Handlebars)
}));

app.set("view engine","hbs");

app.get("/",(req,res)=>{
  res.render("index",{})
});

app.use("/user",Usercontroller);

app.listen("3000",()=>{
  console.log("3000 server started");
});
