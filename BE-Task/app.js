const express = require("express");
const app = express();

const userRoute = require('./Routes/direct');
app.use('/',userRoute);

//module.exports = app;

   app.listen(3000, () => {  //listen can't be routed
    console.log("Server started on port 3000");
});
