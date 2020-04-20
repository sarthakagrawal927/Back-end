const mongoose = require('mongoose');
const User = require("./user.model");

mongoose.connect("mongodb://localhost:27017/UserDatabase",{ useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true },(error) =>{
  if(!error) console.log("Success Database ");
  else console.log(error);
});
