const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   Name :{
    type: String,
    required: "Req"
  },
  EmailId:String,
  Phone:String,
});

mongoose.model("User",UserSchema);
