const mongoose = require('mongoose');
const Course = require("./course.model");

mongoose.connect("mongodb://localhost:27017/Edureka",{ useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true },(error) =>{
  if(!error) console.log("Success");
  else console.log(error);
});
