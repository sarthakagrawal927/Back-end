const express = require("express");
const bodyParser = require("body-parser"); //to study
const ejs = require("ejs"); //to study
const mongoose = require('mongoose'); // got basic idea by robo3T

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
    useNewUrlParser: true
});


const articleSchema = {
    title: String,
    content: String
}

//all actions to be done by the POSTMAN
const Article = mongoose.model("Article", articleSchema); //to study //database model hai

//chained to the rythme ;>
app.route('/articles') //.get().post().delete();
//Requests targeting multiple
    //GET
    .get((req, res) => {
        Article.find((err, foundArticles) => {
            //console.log(foundArticles);
            if (!err) {
                res.send(foundArticles);
            } else
                res.send(err);
        });
    })
    //POST
    .post((req, res) => {
        //  console.log(req.body.title);  //  console.log(req.body.content);
        const firstdata = new Article({
            title: req.body.title,
            content: req.body.content
        });

        firstdata.save((err) => {
            if (!err) {
                res.send("added");
            } else
                res.send(err);
        });
    })
    //DELETE
    .delete((req, res) => {
        Article.deleteMany((err) => {
            if (!err) {
                res.send("deleted all");
            } else
                res.send(err);
        });
    });
    //Requests Targeting SIngle tuple
    //everywhere params.articleTitle is the one being modifiied
    //GET
  app.route("/articles/:articleTitle")
    .get((req,res)=>{
      Article.findOne({title: req.params.articleTitle},(err,foundArticle)=>{
        if (!err) {
            res.send(foundArticle);
        } else
            res.send("not found");
      });
    })
    //Updates a single tuple, replaces it actuallys
    .put((req,res)=>{
      Article.update({title: req.params.articleTitle},  //search our data using id
        {title: req.body.title, content: req.body.content},
        {overwrite:true}, (err)=> {
          if (!err) {
              res.send("Success in changing");
          }
          else res.send(err);
        }
      );
    })
    //Read update, changes a tuple
    .patch((req,res)=>{
      Article.update({title: req.params.articleTitle},
        {$set: req.body}, (err)=> {
          if (!err) {
              res.send("Success in changing");
          }
          else res.send(err);
        }
    );
    })
    //deleting single article
    .delete((req,res)=>{
      Article.deleteOne({title:req.params.articleTitle},(err)=> {
          if (!err) {
              res.send("Success in deleting");
          }
          else res.send(err);
        });
    });

   app.listen(3000, () => {  //listen can't be routed
    console.log("Server started on port 3000");
});
