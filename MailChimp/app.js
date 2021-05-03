//jshint esversion: 6
const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.mail;
    //console.log(firstName, lastName, email);

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us19.api.mailchimp.com/3.0/lists/818332ce1b/";

    const options = {
        method: "POST",
        auth: "sarthakagrawal927:76232feab0999e79bc7fb12dd80566a1-us19"
    };

    const request1 = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.send("success");
        } else res.send("not success");
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });

    request1.write(jsonData);
    request1.end();
});

app.listen(3000, function() {
    console.log("Server Running at 3000");
});

//76232feab0999e79bc7fb12dd80566a1 -us19 - key

//818332ce1b - list