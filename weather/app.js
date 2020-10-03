const express = require('express');
const https = require('https');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

});
app.post("/", (req, res) => {
    const city = req.body.cityName;
    //  console.log(city);
    const apikey = "appid=524c0febb371484079cfa1d34c1abf71";
    const url = "https://openweathermap.org/data/2.5/weather?q=" + city + "&" + apikey;
    console.log(url);
    https.get(url, (response) => {
        response.on("data", (data) => {
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;
            const desc = weatherdata.weather[0].description;
            const icon = weatherdata.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<h1>Temp in " + city + " is " + (temp - 273) + "`C.</h1><h1>The weather is currently " + desc + "</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});