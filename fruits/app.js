
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/FruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [1,"Add name"]
  },
  rating: { //using validators
  type:Number,
  min:1, max:10
},
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating:7,
  review: "Pretty"
});

const kiwi = new Fruit({
  name:"Kiwi",
  rating:9,
  review: "Pretty"
});

const orange = new Fruit({
  name:"orange",
  rating:10,
  review: "Pretty"
});

const banana = new Fruit({
  name:"Banana",
  rating:6,
  review: "Pretty"
});

//fruit.save();
// Fruit.insertMany([kiwi,orange,banana], (err) => {
//   if(err) console.log(err);
//   else console.log("Success");
// });

const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit: fruitSchema  //embedding
});

const Person = mongoose.model("Person", personSchema);
// const person = new Person({
//   name: 'Jo',
//   age:22
// });

const pineapple = new Fruit({
  name:"pineapple",
  rating:6,
  review: "Pretty"
});

pineapple.save();

const person = new Person({
  name: 'SA',
  age:24,
  favouriteFruit: pineapple
});

person.save();

Fruit.find( (err,fruits) => {
    if(err) console.log(err);
    else {
      //console.log(fruits);
      mongoose.connection.close();
    fruits.forEach( (fruit)=>{
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id:'5e540524241c8d22589c42f7'}, {name:'APPLE'},(err) => {
//   if(err) console.log(err);
//   else console.log("Success"); //new attribute gets add up at end but order won't matter as find command will search through everything
// }
// );

// Fruit.deleteOne({_id:'5e540524241c8d22589c42f7'},(err) => {
//   if(err) console.log(err);
//   else console.log("Success");
// }
// );

// Fruit.deleteMany({name:'Apple'},(err) => {
//   if(err) console.log(err);
//   else console.log("Success");
// }
// );

//updating jo for embedding
Person.updateOne({name:'Jo'},{favouriteFruit:orange},(err) => {
  if(err) console.log(err);
  else console.log("Success"); //new attribute gets add up at end but order won't matter as find command will search through everything
});
