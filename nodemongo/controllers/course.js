const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model("Course");

router.get("/",(req,res) => {
  res.send("hi");
});

router.get("/add",(req,res)=>{
  res.render("add-course")
});

router.post("/add",(req,res)=>{
  var Course = new CourseModel();
  Course.courseName = req.body.courseName;
  Course.courseDuration = req.body.courseDuration;
  Course.courseFees = req.body.courseFees;
  Course.courseId = Math.floor(Math.random()*1000000)+"";

  Course.save((err,doc)=>{
    if(!err) res.redirect("/course/list");
    else res.send(err);
  });
})

router.get("/list",(req,res)=>{

  CourseModel.find((err,docs)=>{
    if(!err) {
      //console.log(docs);
      res.render("List",{ data : docs });
    }
    else res.send(err);
  });
});
module.exports = router;
