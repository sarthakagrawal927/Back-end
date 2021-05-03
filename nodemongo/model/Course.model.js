const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseName :{
    type: String,
    required: "Req"
  },
  courseId:String,
  courseDuration:String,
  courseFee:String
});

mongoose.model("Course",CourseSchema);
