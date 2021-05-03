const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UserModel = mongoose.model("User");

router.get("/",(req,res) => {
  res.send("hi");
});

router.get("/create",(req,res)=>{
  res.render("add-user")
});

router.post("/create",(req,res)=>{
  var User = new UserModel();
  User.Name = req.body.Name;
  User.EmailId = req.body.EmailId;
  User.Phone = req.body.Phone;
  User.save((err,doc)=>{
    if(!err) res.redirect("/user/search");
    else res.send(err);
  });
})

router.get("/search",(req,res)=>{

  UserModel.find((err,docs)=>{
    if(!err) {
      //console.log(docs);
      res.render("List",{ data : docs });
    }
    else res.send(err);
  });
});

router.get("/search/:name",(req,res)=>{

  UserModel.findOne({Name: req.params.name+""},(err,docs)=>{
    if(docs) {
      //console.log(docs);
      //res.render("one",{ data : docs });
      //res.render("list",{ data : docs });
      res.send("<html><body><h1>hello "+docs.Name+"</h1><p>Your Email ID is "+docs.EmailId+"</p><p>Your Phone Number is "+docs.Phone+"</p><body></html>")
    }
    else res.send("not found");
  });
});


module.exports = router;
