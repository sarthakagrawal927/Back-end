const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const team = [{id:1, name: 'Sarthak'},
             {id:2, name: 'Sarthak12'},
             {id:3, name: 'Sarthak13'}];

app.get('/name',(req,res) => {
  res.send('Sarthak');
});

app.get('/team',(req,res)=>{
  res.send(team);
});

// app.post('/api/team',(req,res) => {
//
//   const schema = {
//     name: Joi.string().min(3).required()
//   };
//
//   const result = Joi.validate(req.body, schema);
//   //console.log(result);
//   if(req.error){
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }
//   const member = {
//     id: team.length + 1,
//     name: req.body.name
//   };
//   team.push(member);
//   res.send(member);
// });

// app.get('/api/team/:id',(req,res)=>{
//   let member = team.find(c => c.id == req.params.id);
//   if(!member) res.status(404).send('given id not found');
//   res.send(member);
// });

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening to port ${port}`));
