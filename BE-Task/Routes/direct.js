const express = require("express");
const app = express.Router();

app.route('/favicon.ico')
  .get((req,res) => {
  res.send("[INSERT LOGO HERE]");
});

app.route('/user')
  .get((req,res) => {
  res.send("Add Name and age to get answers");
});

app.route('/users')
  .get((req,res) => {
  res.send("PLease change 'users' to 'user' and add your name and age to see the magic");
});

app.route('/user/:name')
    .get((req, res) => {
        //res.send('Hello '+ req.params.name);
        res.send('<html><body><h1>Hello '+req.params.name+'</h1></body></html>');
      });

app.route('/user/:name/:age')
  .get((req, res) => {
    var description = " ";
    if(req.params.age <= 0)
      description = "baby in a stomach. Not sure how you could type though."
    else if(req.params.age <= 12)
      description = "Child";
    else if (req.params.age < 18)
      description = "Teen";
    else if(req.params.age < 100)
      description = "Adult";
    else
      description = "God XD";

    res.send('<html><body><h1>Hello '+req.params.name+'</h1><p>You are a '+description+'</p></body></html>');
    })

    .post((req, res) => {
      var description = " ";
      if(req.params.age <= 12)
        description = "Child";
      else if (req.params.age < 18)
        description = "Teen";
      else
        description = "Adult";
        //res.send('he');
      res.send('<html><body><h1>Hello '+req.params.name+'</h1><p>You are a '+description+'</p></body></html>');
    });

module.exports = app;
